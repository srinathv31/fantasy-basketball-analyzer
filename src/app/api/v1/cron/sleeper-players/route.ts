import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db/sql";
import { SleeperPlayers } from "@/interfaces/sleeper";

/**
 * Helper function to chunk an array into subarrays of a given size.
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export async function GET(request: NextRequest) {
  try {
    // 1. Secure CRON job using Authorization header
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 2. Fetch data from Sleeper
    const res = await fetch(process.env.SLEEPER_PLAYERS_URL!);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch Sleeper data. Status: ${res.status} ${res.statusText}`,
      );
    }
    // 'players' is an object where keys are player IDs, values are the data
    const players: SleeperPlayers = await res.json();

    // Convert the object to an array of PlayerRow for easier batching
    const rows = Object.entries(players).map(([playerId, playerData]) => ({
      playerId,
      playerJson: JSON.stringify(playerData),
    }));

    // 3. Define your batch size (e.g., 300 or 500)
    const BATCH_SIZE = 500;
    const chunkedRows = chunkArray(rows, BATCH_SIZE);

    // 4. Begin a transaction
    await sql("BEGIN;");

    try {
      // 5. Upsert each batch
      for (const chunk of chunkedRows) {
        const valuesSql: string[] = [];
        const parameters: string[] = [];

        // Build the VALUES portion, e.g.: ($1, $2::jsonb), ($3, $4::jsonb), ...
        chunk.forEach((row, i) => {
          const baseIndex = i * 2;
          valuesSql.push(`($${baseIndex + 1}, $${baseIndex + 2}::jsonb)`);
          parameters.push(row.playerId, row.playerJson);
        });

        const query = `
          INSERT INTO sleeper_players (player_id, data)
          VALUES ${valuesSql.join(", ")}
          ON CONFLICT (player_id)
          DO UPDATE SET data = EXCLUDED.data
        `;

        await sql(query, parameters);
      }

      // 6. Commit the transaction if all batches succeed
      await sql("COMMIT;");
    } catch (innerError) {
      // If something goes wrong, roll back to keep DB consistent
      await sql("ROLLBACK;");
      throw innerError; // re-throw so outer catch handles
    }

    // 7. Return a successful response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in cron job:", error);

    // Return a JSON error response
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unknown error occurred while updating players.",
      },
      { status: 500 },
    );
  }
}

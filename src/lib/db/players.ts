import { SleeperPlayer } from "@/interfaces/sleeper";
import sql from "./sql";

export async function getPlayers(playerIds: string[]) {
  try {
    const query = `
      SELECT data
      FROM sleeper_players
      WHERE player_id = ANY($1::text[])
    `;

    const players = (await sql(query, [playerIds])) as {
      data: SleeperPlayer;
    }[];

    return { players };
  } catch (error) {
    console.error(error);
    return { players: [], error: "Failed to fetch players" };
  }
}

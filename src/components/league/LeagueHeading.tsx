import { getLeague } from "@/lib/league";
import Image from "next/image";

export default async function LeagueHeading({
  leaguePromise,
}: {
  leaguePromise: ReturnType<typeof getLeague>;
}) {
  const league = await leaguePromise;

  if (!league) {
    return <div>Failed to fetch league</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-4 border rounded-md p-4 w-1/2">
        <Image
          src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`}
          alt={`${league.name} avatar`}
          height={50}
          width={50}
        />
        <p>{league.name}</p>
        <p>{league.season}</p>
      </div>
    </div>
  );
}

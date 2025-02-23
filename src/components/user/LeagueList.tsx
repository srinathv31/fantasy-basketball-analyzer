import { getUserLeagues } from "@/lib/user";
import Image from "next/image";
import Link from "next/link";

export default async function LeagueList({ userId }: { userId: string }) {
  const leagues = await getUserLeagues(userId);

  if (!leagues) {
    return <div>No leagues found</div>;
  }

  return (
    <div>
      <ul>
        {leagues.map((league) => (
          <li key={league.league_id}>
            <Link
              href={`/sleeper/league/${league.league_id}?userId=${userId}`}
              className="flex items-center space-x-4 border rounded-md p-4 w-1/2"
            >
              <Image
                src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`}
                alt={`${league.name} avatar`}
                height={50}
                width={50}
              />
              <p>{league.name}</p>
              <p>{league.season}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Roster } from "@/interfaces/sleeper";
import { getUser } from "@/lib/user";
import UserCard from "../user/UserCard";
import { getPlayers } from "@/lib/db/players";
import Image from "next/image";

export default async function RosterView({ roster }: { roster: Roster }) {
  const user = await getUser({ userId: roster.owner_id });

  const { players } = await getPlayers(roster.players);

  if (!players) {
    return <div>Failed to fetch players</div>;
  }

  return (
    <div className="p-4 space-y-4 border rounded-md">
      {user ? <UserCard user={user} /> : <p>Owner ID: {roster.owner_id}</p>}
      <ul className="space-y-2">
        {players.map(({ data: player }) => (
          <li key={player.player_id}>
            <div className="flex items-center space-x-4 border rounded-md p-2">
              <Image
                src={`https://sleepercdn.com/content/nba/players/thumb/${player.player_id}.jpg`}
                alt={player.search_full_name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <p>{player.full_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

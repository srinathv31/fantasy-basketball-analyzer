import { Roster } from "@/interfaces/sleeper";
import { getUser } from "@/lib/user";
import UserCard from "../user/UserCard";
import { getPlayers } from "@/lib/db/players";

export default async function RosterView({ roster }: { roster: Roster }) {
  const user = await getUser({ userId: roster.owner_id });

  const players = await getPlayers(roster.players);

  if (players) {
    console.log(players[0]);
  }

  return (
    <div className="p-4 space-y-4 border rounded-md">
      {user ? <UserCard user={user} /> : <p>Owner ID: {roster.owner_id}</p>}
      <ul>
        {roster.players.map((player) => (
          <li key={player}>
            <p>{player}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

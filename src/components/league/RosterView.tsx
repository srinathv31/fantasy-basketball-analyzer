import { Roster } from "@/interfaces/sleeper";
import { getUser } from "@/lib/user";
import UserCard from "../user/UserCard";

export default async function RosterView({ roster }: { roster: Roster }) {
  const user = await getUser({ userId: roster.owner_id });

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

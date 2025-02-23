import { getLeagueRosters } from "@/lib/league";
import RosterView from "./RosterView";

export default async function RosterList({
  leagueId,
  userId,
}: {
  leagueId: string;
  userId: string | string[] | undefined;
}) {
  const rosters = await getLeagueRosters(leagueId);

  if (!rosters) {
    return <div>Failed to fetch rosters</div>;
  }

  const userRoster = rosters.filter((roster) => roster.owner_id === userId);
  const otherRosters = rosters.filter((roster) => roster.owner_id !== userId);

  return (
    <div className="p-4 space-y-4">
      <p>Your roster:</p>
      <RosterView roster={userRoster[0]} />
      <p>Laegue rosters:</p>
      <ul>
        {otherRosters.map((roster) => (
          <li key={roster.roster_id}>
            <RosterView roster={roster} />
          </li>
        ))}
      </ul>
    </div>
  );
}

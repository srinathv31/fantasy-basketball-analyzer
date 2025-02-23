import { getLeagueRosters } from "@/lib/league";
import RosterView from "./RosterView";
import { Suspense } from "react";

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
    <div className="flex flex-row space-x-4">
      <div className="flex flex-col w-1/2">
        <p>Your roster:</p>
        <Suspense fallback={<div>Loading...</div>}>
          <RosterView roster={userRoster[0]} />
        </Suspense>
      </div>
      <div className="flex flex-col w-1/2 h-screen overflow-y-scroll">
        <p>League rosters:</p>
        <ul>
          {otherRosters.map((roster) => (
            <li key={roster.roster_id}>
              <Suspense fallback={<div>Loading...</div>}>
                <RosterView roster={roster} />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

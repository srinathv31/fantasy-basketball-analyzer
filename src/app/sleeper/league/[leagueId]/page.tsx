import LeagueHeading from "@/components/league/LeagueHeading";
import RosterList from "@/components/league/RosterList";
import { getLeague } from "@/lib/league";
import { Suspense } from "react";

export default async function LeaguePage({
  params,
  searchParams,
}: {
  params: Promise<{ leagueId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { leagueId } = await params;
  const { userId } = await searchParams;

  const league = getLeague(leagueId);

  return (
    <div className="p-4 space-y-4">
      <Suspense fallback={<div>Loading...</div>}>
        <LeagueHeading leaguePromise={league} />
      </Suspense>
      <Suspense fallback={<div>Loading Rosters...</div>}>
        <RosterList leagueId={leagueId} userId={userId} />
      </Suspense>
    </div>
  );
}

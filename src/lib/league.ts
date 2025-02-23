import { League, Roster } from "@/interfaces/sleeper";

export async function getLeague(leagueId: string) {
  try {
    console.log(`Fetching league ${leagueId}`);

    // fetch league
    const res = await fetch(
      `${process.env.SLEEPER_BASE_URL}/v1/league/${leagueId}`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Sleeper league. Status: ${res.status} ${res.statusText}`,
      );
    }

    const league: League = await res.json();

    if (!league) {
      return null;
    }

    return league;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLeagueRosters(leagueId: string) {
  try {
    console.log(`Fetching rosters for league ${leagueId}`);

    // fetch league rosters
    const res = await fetch(
      `${process.env.SLEEPER_BASE_URL}/v1/league/${leagueId}/rosters`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Sleeper league rosters. Status: ${res.status} ${res.statusText}`,
      );
    }

    const rosters: Roster[] = await res.json();

    if (!rosters) {
      return null;
    }

    return rosters;
  } catch (error) {
    console.error(error);
    return null;
  }
}

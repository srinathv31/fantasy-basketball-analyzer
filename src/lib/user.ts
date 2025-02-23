import { Leagues, User } from "@/interfaces/sleeper";

export async function getUser(params: {
  [key: string]: string | string[] | undefined;
}) {
  try {
    const { username, userId } = params;

    const id = userId || username;

    if (!id) {
      return null;
    }

    console.log(`Fetching user ${id}`);

    // fetch user
    const res = await fetch(`${process.env.SLEEPER_BASE_URL}/v1/user/${id}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Sleeper user. Status: ${res.status} ${res.statusText}`,
      );
    }

    const user: User = await res.json();

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserLeagues(userId: string) {
  try {
    console.log(`Fetching leagues for user ${userId}`);

    // fetch user leagues
    const res = await fetch(
      `${process.env.SLEEPER_BASE_URL}/v1/user/${userId}/leagues/nba/2024`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Sleeper user leagues. Status: ${res.status} ${res.statusText}`,
      );
    }

    const leagues: Leagues = await res.json();

    if (!leagues) {
      return null;
    }

    return leagues;
  } catch (error) {
    console.error(error);
    return null;
  }
}

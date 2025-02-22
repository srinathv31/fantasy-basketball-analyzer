// import players from "@/data/nba-players-sleeper.json";
// import { SleeperPlayers } from "@/interfaces/sleeper";

// const playerMap: SleeperPlayers = players;

export async function getPlayer(params: {
  [key: string]: string | string[] | undefined;
}) {
  const { ["player-name"]: playerName } = params;

  if (!playerName) {
    return null;
  }

  const playerNameSearch = playerName
    .toString()
    .toLowerCase()
    .replace(/\s/g, "");

  // find player from players object
  //   const player = Object.values(playerMap).find(
  //     (value) => value.search_full_name === playerNameSearch,
  //   );

  //   if (!player) {
  //     return null;
  //   }

  return playerNameSearch;
}

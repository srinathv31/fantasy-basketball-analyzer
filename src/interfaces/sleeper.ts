export type SleeperPlayers = Record<string, SleeperPlayer>;

export interface SleeperPlayer {
  hashtag: string;
  depth_chart_position: number;
  status: string;
  sport: string;
  fantasy_positions: string[];
  number: number;
  search_last_name: string;
  injury_start_date: string | null;
  weight: string;
  position: string;
  practice_participation: string | null;
  sportradar_id: string;
  team: string;
  last_name: string;
  college: string;
  fantasy_data_id: number;
  injury_status: string | null;
  player_id: string;
  height: string;
  search_full_name: string;
  age: number;
  stats_id: string;
  birth_country: string;
  espn_id: string;
  search_rank: number;
  first_name: string;
  depth_chart_order: number;
  years_exp: number;
  rotowire_id: number | null;
  rotoworld_id: number;
  search_first_name: string;
  yahoo_id: string | null;
  full_name?: string;
}

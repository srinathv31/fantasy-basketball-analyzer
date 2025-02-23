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

export interface User {
  username: string;
  user_id: string;
  display_name: string;
  avatar: string;
}

export interface League {
  last_message_time: number;
  season_type: string;
  last_message_text_map: string | null;
  last_author_avatar: string | null;
  metadata: {
    auto_continue: string;
    keeper_deadline: string;
    latest_league_winner_roster_id: string;
  };
  display_order: number;
  shard: number;
  season: string;
  league_id: string;
  sport: string;
  loser_bracket_overrides_id: string | null;
  scoring_settings: {
    ast: number;
    blk: number;
    bonus_pt_40p: number;
    bonus_pt_50p: number;
    dd: number;
    ff: number;
    pts: number;
    reb: number;
    stl: number;
    td: number;
    tf: number;
    to: number;
    tpm: number;
  };
  roster_positions: string[];
  last_message_id: string;
  status: string;
  loser_bracket_id: string | null;
  name: string;
  group_id: string | null;
  last_read_id: string;
  company_id: string | null;
  settings: {
    reserve_allow_dtd: number;
    last_report: number;
    waiver_budget: number;
    disable_adds: number;
    capacity_override: number;
    taxi_deadline: number;
    draft_rounds: number;
    reserve_allow_na: number;
    start_week: number;
    playoff_seed_type: number;
    playoff_teams: number;
    num_teams: number;
    daily_waivers_hour: number;
    playoff_type: number;
    taxi_slots: number;
    last_scored_leg: number;
    daily_waivers_days: number;
    playoff_week_start: number;
    waiver_clear_days: number;
    waiver_after_game_start: number;
    reserve_allow_doubtful: number;
    commissioner_direct_invite: number;
    reserve_allow_dnr: number;
    taxi_allow_vets: number;
    waiver_day_of_week: number;
    playoff_round_type: number;
    reserve_allow_out: number;
    reserve_allow_sus: number;
    trade_deadline: number;
    taxi_years: number;
    daily_waivers: number;
    game_mode: number;
    pick_trading: number;
    type: number;
    max_keepers: number;
    waiver_type: number;
    league_average_match: number;
    trade_review_days: number;
    bench_lock: number;
    offseason_adds: number;
    leg: number;
    reserve_slots: number;
    reserve_allow_cov: number;
    daily_waivers_last_ran: number;
  };
  bracket_overrides_id: string | null;
  last_author_is_bot: boolean;
  bracket_id: string | null;
  last_message_attachment: string | null;
  avatar: string;
  draft_id: string;
  last_author_id: string;
  previous_league_id: string;
  last_pinned_message_id: string | null;
  last_author_display_name: string;
  last_transaction_id: number;
  total_rosters: number;
}

export type Leagues = League[];

export interface Roster {
  starters: string[]; // Array of player IDs or team IDs
  settings: {
    wins: number;
    waiver_position: number;
    waiver_budget_used: number;
    total_moves: number;
    ties: number;
    losses: number;
    fpts_decimal: number;
    fpts_against_decimal: number;
    fpts_against: number;
    fpts: number;
  };
  roster_id: number;
  reserve: string[]; // Array of player IDs in reserve
  players: string[]; // Array of all player IDs in the roster
  owner_id: string; // ID of the team owner
  league_id: string; // Associated league ID
}

export interface Team {
  id: number;
  name: string;
}

export interface Group {
  id: string;
  color: 'blue' | 'orange';
  teams: Team[];
  isFinished?: boolean;
}

export interface Match {
  game: number;
  home: number;
  away: number;
  homeScore?: number;
  awayScore?: number;
  status?: 'pending' | 'completed' | 'in-progress';
  homeSets?: number;
  awaySets?: number;
  homePoints?: number;
  awayPoints?: number;
}

export interface BracketMatch {
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  status?: 'pending' | 'completed' | 'in-progress';
}

export interface Bracket {
  SF1: BracketMatch;
  SF2: BracketMatch;
  ThirdPlace: BracketMatch;
  Final: BracketMatch;
}

export interface Prize {
  place: number;
  title: string;
  image: string;
}

export interface Sponsor {
  name: string;
  logo: string;
}

export interface Gallery {
  provider: string;
  url: string;
  pricing: {
    single: number;
    fromTwo: number;
  };
}

export interface TournamentRules {
  setPoints: number;
  advantageFrom: number;
  sideSwitchEvery: number;
  tiebreakers: string[];
}

export interface Tournament {
  event: string;
  rules: TournamentRules;
  groups: Group[];
  schedule: Match[];
  bracket: Bracket;
  prizes: Prize[];
  sponsors: Sponsor[];
  gallery: Gallery;
}

export interface GroupStandings {
  teamId: number;
  teamName: string;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
}

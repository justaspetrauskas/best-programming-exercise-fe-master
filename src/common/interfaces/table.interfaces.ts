export interface Character {
  id: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  location: Location;
  episode: Episode[];
}

export interface CharacterProfile {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  origin: Location;
  location: Location;
}

export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export interface Location {
  name: string;
}

export interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface TableData {
  results: Character[];
  info: Info;
}

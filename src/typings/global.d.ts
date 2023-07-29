interface PageProps {
  params: { slug: string };
  searchParams: SearchParams;
}

type SearchParams = Record<string, any>;

interface SearchResult<T> {
  info: SearchResultInfo;
  results: T[];
}

interface SearchResultInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type Status = 'Alive' | 'Dead' | 'unknown';

type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: Status;
  gender?: Gender;
  page?: number;
}

interface LocationFilter {
  name?: string;
  type?: string;
  page?: number;
  dimension?: string;
}

interface EpisodeFilter {
  episode?: string;
  name?: string;
  page?: number;
}

type Filters = EpisodeFilter | LocationFilter | CharacterFilter | undefined;

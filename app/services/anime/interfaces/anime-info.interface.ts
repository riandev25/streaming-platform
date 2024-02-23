interface IAnimeEpisodeInfo {
  id: string;
  number: number;
  url: string;
}

interface IAnimeInfo {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string | null;
  description: string | null;
  genres: string[];
  subOrDub: 'sub' | 'dub';
  type: string | null;
  status: string;
  otherName: string | null;
  totalEpisodes: number;
  episodes: IAnimeEpisodeInfo[];
}

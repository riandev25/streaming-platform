interface ISearchAnimeResults {
  id: string;
  title: string;
  image: string;
  releaseDate: string | null;
  subOrDub: 'sub' | 'dub';
}

export interface ISearchAnime {
  currentPage: number;
  hasNextPage: boolean;
  results: ISearchAnimeResults[];
}

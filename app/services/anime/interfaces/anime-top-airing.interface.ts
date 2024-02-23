interface ITopAiringAnime {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
}

export interface ITopAiringAnimes {
  currentPage: number;
  hasNextPage: boolean;
  results: ITopAiringAnime[];
}

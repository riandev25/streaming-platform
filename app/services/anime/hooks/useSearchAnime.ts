import animeServices from '../anime.services';
import { useQuery } from '@tanstack/react-query';
import { ISearchAnime } from '../interfaces/anime-search.interface';

export const useSearchAnime = (search: string, page?: number) => {
  const { isPending, error, data, isLoading } = useQuery<ISearchAnime>({
    queryKey: ['anime-search', search, page],
    queryFn: () => animeServices.getAnimeSearch(search, page),
  });
  return { data, isLoading, error };
};

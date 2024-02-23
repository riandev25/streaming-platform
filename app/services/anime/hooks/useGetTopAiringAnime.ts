import animeServices from '../anime.services';
import { useQuery } from '@tanstack/react-query';
import { ITopAiringAnimes } from '../interfaces/anime-top-airing.interface';

export const useGetTopAiringAnime = () => {
  const { isPending, error, data, isLoading } = useQuery<ITopAiringAnimes>({
    queryKey: ['anime-top-airing'],
    queryFn: animeServices.getTopAiringAnime,
  });
  return { data, isLoading, error };
};

import animeServices from '../anime.services';
import { useQuery } from '@tanstack/react-query';

export const useGetAnimeInfo = (id: string) => {
  const { isPending, error, data, isLoading } = useQuery<IAnimeInfo>({
    queryKey: ['anime-info', id],
    queryFn: () => animeServices.getAnimeInfo(id),
  });
  return { data, isLoading, error };
};

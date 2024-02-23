import animeServices from '../anime.services';
import { useQuery } from '@tanstack/react-query';

export const useGetAnimeLinks = (episodeId: string, serverName: string) => {
  const { isPending, error, data, isLoading } = useQuery<IAnimeLinks>({
    queryKey: ['anime-links', episodeId, serverName],
    queryFn: () => animeServices.getAnimeLinks(episodeId, serverName),
  });
  return { data, isLoading, error };
};

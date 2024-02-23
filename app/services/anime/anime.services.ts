import axios from 'axios';
import { ITopAiringAnimes } from './interfaces/anime-top-airing.interface';
import { ISearchAnime } from './interfaces/anime-search.interface';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTopAiringAnime = async (): Promise<ITopAiringAnimes> => {
  const result = await axiosInstance.get('/anime/gogoanime/top-airing');
  return result.data;
};

export const getAnimeInfo = async (id: string): Promise<IAnimeInfo> => {
  const result = await axiosInstance.get(`/anime/gogoanime/info/${id}`);
  return result.data;
};

export const getAnimeSearch = async (
  search: string,
  page?: number
): Promise<ISearchAnime> => {
  const result = await axiosInstance.get(
    `/anime/gogoanime/${search}?page=${page}`
  );
  return result.data;
};

export const getAnimeLinks = async (episodeId: string, serverName: string) => {
  const result = await axiosInstance.get(
    `/anime/gogoanime/watch/${episodeId}?server=${serverName}`
  );
  return result.data;
};

const animeServices = {
  getTopAiringAnime,
  getAnimeInfo,
  getAnimeSearch,
  getAnimeLinks,
};

export default animeServices;

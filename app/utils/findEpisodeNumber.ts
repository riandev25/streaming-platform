export const findLastEpisodeNumber = (str: string) => {
  const searchTerm = 'episode-';
  const parts = str.split(searchTerm);

  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1];
    const episodeNumber = parseInt(lastPart, 10);
    return !isNaN(episodeNumber) ? episodeNumber : 1;
  }

  return 1;
};

interface Source {
  url: string;
  quality: string;
  isM3U8: true;
}

interface Headers {
  Referer: string;
  watchsb: string | null;
  'User-Agent': string | null;
}

interface IAnimeLinks {
  headers: Headers;
  sources: Source[];
}

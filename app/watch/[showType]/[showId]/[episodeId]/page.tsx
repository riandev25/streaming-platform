'use client';
import React, { useEffect, useState } from 'react';
import VideoContainer from '../../../../components/video-container/VideoContainer';
import { Container, Row } from 'react-bootstrap';
import EpisodePicker from '../../../../components/episode-picker/EpisodePicker';
import { useGetAnimeInfo } from '../../../../services/anime/hooks/useGetAnimeInfo';
import { useGetAnimeLinks } from '../../../../services/anime/hooks/useGetAnimeLinks';
import { findLastEpisodeNumber } from '../../../../utils/findEpisodeNumber';

const Page = ({
  params,
}: {
  params: { showType: string; showId: string; episodeId: string };
}) => {
  const [playerWidth, setPlayerWidth] = useState('7rem');
  const [defaultResolution, setDefaultResolution] = useState('1080p');

  // find current episode
  const currEpisode = findLastEpisodeNumber(params.episodeId);

  // Anime info
  const { data: animeInfo, isLoading: isAnimeInfoLoading } = useGetAnimeInfo(
    params.showId
  );

  // Anime links
  const { data: animeLinks, isLoading: isAnimeLinksLoading } = useGetAnimeLinks(
    params.episodeId,
    'gogocdn'
  );

  const streamUrl = animeLinks?.sources.find(
    (animeLink) => animeLink.quality === defaultResolution
  )?.url;

  useEffect(() => {
    const updatePlayerWidth = () => {
      if (window.innerWidth < 768) {
        // For smaller screens
        setPlayerWidth('1rem');
      } else {
        // For larger screens
        setPlayerWidth('7rem');
      }
    };

    // Update player width on window resize
    window.addEventListener('resize', updatePlayerWidth);

    // Call the function initially
    updatePlayerWidth();

    // Cleanup
    return () => window.removeEventListener('resize', updatePlayerWidth);
  }, []);

  return (
    <main className='main'>
      <Container
        fluid
        style={{
          display: 'flex',

          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Row>
          <VideoContainer streamUrl={streamUrl} />
        </Row>
        <Row
          className='d-flex flex-column justify-content-center align-items-center text-white gap-4'
          style={{ padding: `3rem ${playerWidth}`, background: '#141414' }}
        >
          <EpisodePicker data={animeInfo} currEpisode={currEpisode} />
        </Row>
      </Container>
    </main>
  );
};

export default Page;

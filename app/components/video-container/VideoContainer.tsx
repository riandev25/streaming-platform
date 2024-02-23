'use client';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';
import { useState, useEffect } from 'react';

interface IVideoContainer {
  data?: IAnimeInfo;
  streamUrl?: string;
}

const VideoContainer = ({ data, streamUrl }: IVideoContainer) => {
  const [playerWidth, setPlayerWidth] = useState('70%');

  useEffect(() => {
    const updatePlayerWidth = () => {
      if (window.innerWidth < 768) {
        // For smaller screens
        setPlayerWidth('100%');
      } else {
        // For larger screens
        setPlayerWidth('70%');
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
    <Col
      xs={12}
      md={11}
      lg={10}
      className='mx-auto d-flex justify-content-center'
      style={{ height: '100%' }}
    >
      <ReactPlayer
        controls={true}
        url={streamUrl}
        width={playerWidth}
        height='100%'
      />
    </Col>
  );
};

export default VideoContainer;

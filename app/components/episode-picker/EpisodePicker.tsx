import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownButton,
  Card,
  Container,
} from 'react-bootstrap';

interface EpisodePicker {
  data?: IAnimeInfo;
  currEpisode: number;
}

const EpisodePicker = ({ data, currEpisode }: EpisodePicker) => {
  const [width, setPlayerWidth] = useState<'sm' | undefined>(undefined);

  const currentEpisode = currEpisode;

  const prevEpisode = `${data?.id}-episode-${currentEpisode - 1}`;
  const nextEpisode = `${data?.id}-episode-${currentEpisode + 1}`;

  const isPrevBtnDisabled = currentEpisode === 1 ? true : false;
  const isNextBtnDisabled =
    data?.totalEpisodes === currentEpisode ? true : false;

  useEffect(() => {
    const updatePlayerWidth = () => {
      if (window.innerWidth < 768) {
        // For smaller screens
        setPlayerWidth('sm');
      } else {
        // For larger screens
        setPlayerWidth(undefined);
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
    <>
      <div
        className='d-flex justify-content-between align-items-center text-white p-3 w-100 rounded'
        style={{ background: '#222222' }}
      >
        <Button
          variant='primary'
          size={width}
          className='px-4'
          href={prevEpisode}
          disabled={isPrevBtnDisabled}
        >
          Prev
        </Button>
        <div className='d-flex justify-content-center align-items-center'>
          {/* <DropdownButton
            id='dropdown-basic-button'
            title='Season 1'
            variant='primary'
            size={width}
            className='px-1 custom-dropdown'
          >
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              <Dropdown.Item href='#/action-1'>Episode 1</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Episode 2</Dropdown.Item>
              <Dropdown.Item href='#/action-1'>Episode 1</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Episode 2</Dropdown.Item>
              <Dropdown.Item href='#/action-1'>Episode 1</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Episode 2</Dropdown.Item>
              <Dropdown.Item href='#/action-1'>Episode 1</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Episode 2</Dropdown.Item>
            </div>
          </DropdownButton> */}
          <DropdownButton
            id='dropdown-basic-button'
            title={`Episode ${currentEpisode}`}
            variant='primary'
            size={width}
            className='px-1 custom-dropdown'
          >
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {data?.episodes.map((data) => {
                return (
                  <Dropdown.Item href={data.id} key={data.id}>
                    Episode {data.number}
                  </Dropdown.Item>
                );
              })}
            </div>
          </DropdownButton>
        </div>
        <Button
          variant='primary'
          size={width}
          className='px-4'
          href={nextEpisode}
          disabled={isNextBtnDisabled}
        >
          Next
        </Button>
      </div>
      <div className='d-flex justify-content-between align-items-start gap-4 px-0'>
        <Card.Img
          variant='top'
          src={data?.image}
          style={{ maxWidth: '15rem' }}
        />
        <Card className='bg-dark text-white'>
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>
              What would the world be like if 80 percent of the population
              manifested extraordinary superpowers called “Quirks” at age four?
              Heroes and villains would be battling it out everywhere! Becoming
              a hero would mean learning to use your power, but where would you
              go...
            </Card.Text>
            <Button variant='primary'>Show more</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default EpisodePicker;

'use client';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ITopAiringAnimes } from '../../services/anime/interfaces/anime-top-airing.interface';
import Link from 'next/link';
import { ISearchAnime } from '../../services/anime/interfaces/anime-search.interface';

interface INewEpisodesShowcase {
  data?: ITopAiringAnimes | ISearchAnime;
  isLoading: boolean;
  showType: string;
  resultsTitle: string;
}

function NewEpisodesShowcase({
  data,
  isLoading,
  showType,
  resultsTitle,
}: INewEpisodesShowcase) {
  const dummyTopAiringAnime = [
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
    { id: '1', title: 'Loading', image: 'https://via.placeholder.com/150' },
  ];

  const isResultsPresent = data && data?.results?.length >= 0 ? true : false;

  return (
    <Container>
      <h2 className='text-white'>{resultsTitle}</h2>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className='g-4'>
        {isResultsPresent ? (
          (isLoading ? dummyTopAiringAnime : data?.results ?? []).map(
            (anime, index) => (
              <Col key={index} id={anime.id}>
                <Card>
                  <Card.Img variant='top' src={anime.image} />
                  <Card.Body className='d-flex flex-column'>
                    <Link
                      href={`/watch/${showType}/${anime.id}/${anime.id}-episode-1`}
                    >
                      <Card.Title className='text-nowrap overflow-hidden'>
                        {anime.title}
                      </Card.Title>
                    </Link>
                    {/* <Card.Text className='text-nowrap overflow-hidden'> */}
                    {/* Additional text content */}
                    {/* </Card.Text> */}
                    {/* <Button variant='primary'>Visit</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            )
          )
        ) : (
          <p>Not found</p>
        )}
      </Row>
    </Container>
  );
}

export default NewEpisodesShowcase;

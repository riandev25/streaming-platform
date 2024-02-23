'use client';
import { Container } from 'react-bootstrap';
import { useSearchAnime } from '../../services/anime/hooks/useSearchAnime';
import NewEpisodesShowcase from '../../components/new-episodes-showcase/NewEpisodesShowcase';

export default function Search({
  params,
}: {
  params: { searchString: string };
}) {
  const { data: searchedAnime, isLoading: isSearchedAnimeLoading } =
    useSearchAnime(params.searchString, 1);

  return (
    <main className='main'>
      <Container className='d-flex flex-column gap-5 my-5'>
        <NewEpisodesShowcase
          data={searchedAnime}
          isLoading={isSearchedAnimeLoading}
          showType='anime'
          resultsTitle='Searched Results'
        />
      </Container>

      {/* <div>
        <button type='button' onClick={() => googleLogin()}>
          GOOGLE LOGIN
        </button>
      </div> */}
    </main>
  );
}

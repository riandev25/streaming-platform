'use client';
import styles from './page.module.css';
import NewEpisodesShowcase from './components/new-episodes-showcase/NewEpisodesShowcase';
import { Container } from 'react-bootstrap';
import { useGetTopAiringAnime } from './services/anime/hooks/useGetTopAiringAnime';

export default function Home() {
  const { data: topAiringAnime, isLoading: isTopAiringAnimeLoading } =
    useGetTopAiringAnime();

  return (
    <main className={styles.main}>
      <Container className='d-flex flex-column gap-5 my-5'>
        <NewEpisodesShowcase
          resultsTitle='Top Airing Anime'
          data={topAiringAnime}
          isLoading={isTopAiringAnimeLoading}
          showType='anime'
        />
        {/* <NewEpisodesShowcase /> */}
      </Container>

      {/* <div>
        <button type='button' onClick={() => googleLogin()}>
          GOOGLE LOGIN
        </button>
      </div> */}
    </main>
  );
}

//* Import Components
import React, { useState } from 'react';

//Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

// Import Components
import Grid from './elements/Grid.jsx';
import MovieThumb from './elements/MovieThumb.jsx';
import HeroImage from './elements/HeroImage.jsx';
import LoadMoreBtn from './elements/LoadMoreBtn.jsx';
import Spinner from './elements/Spinner.jsx';
import SearchBar from './elements/SearchBar.jsx';

//Import Images
import NoImage from './images/no_image.jpg';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  if (!state.movies[0]) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <HeroImage
        image={`${process.env.local.IMAGE_BASE_URL}${process.env.local.BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              state.movie.poster_path
                ? `${process.env.local.IMAGE_BASE_URL}${process.env.local.POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;

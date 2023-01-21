import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import Container from 'components/Container/Container';
import MovieList from 'components/MoviesList/MovieList';
import PageHeading from 'components/Pageheading/Pageheading';
import SearchBar from 'components/SearchBar/SearchBar';

import { fetchByQuery } from 'services/movies-api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {
      setLoading(true);
      fetchByQuery(searchRequest)
        .then(results => {
          if (!results.length) {
            Notiflix.Notify.info('No movies found!');
          }
          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          Notiflix.Notify.failure(error);
        })
        .finally(setLoading(false));
    };
    fetchMovie();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
      <Container>
        <PageHeading text={'Movie Search'} />
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} prevLocation={location} />}
      </Container>
    </>
  );
};

export default MoviesPage;

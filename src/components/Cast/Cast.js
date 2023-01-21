import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCredits } from 'services/movies-api';

import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const brockenImg =
    'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-8.jpg';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        setCast(res);
      } catch (error) {
        setError('Movie casts search error...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      {cast && cast.length ? (
        <ul className={s.castList}>
          {cast.map(castItem => {
            return (
              <li key={castItem.id} className={s.castItem}>
                <img
                  src={
                    castItem.profile_path
                      ? `https://image.tmdb.org/t/p/w300${castItem.profile_path}`
                      : brockenImg
                  }
                  alt={`${castItem.name} portrait`}
                  className={s.castImg}
                />
                <div>
                  <p>Name: {castItem.name}</p>
                  <p>Character: {castItem.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We don't have any casts for this movie.</h3>
      )}
    </>
  );
};

export default Cast;

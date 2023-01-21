import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesReviews } from 'services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError('Movie reviews search error...');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      {reviews && reviews.length ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </>
  );
};

export default Reviews;

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import s from './MoviesList.module.css';

const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(({ id, name, title, poster_path }) => (
            <li key={id} className={s.item}>
              <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
                {poster_path ? (
                  <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <img
                    className={s.img}
                    src={
                      'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg'
                    }
                    alt={name}
                  />
                )}
                <p>{name ? name : title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MovieList;

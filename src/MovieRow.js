import React from 'react';

const MovieRow = (props) => {
    return (
        <div>
            <h1>{props.movie.title}</h1>
            <p>{props.movie.overview}</p>
            <img src={props.movie.poster_src} alt='poster'/>
        </div>
    );
};

export default MovieRow;
import React from 'react';
import classes from './MovieRow.css';

const MovieRow = (props) => {
    return (
        <div className={classes.Container}>
            <table className={classes.Row}>
                <tr>
                    <td>
                        <img src={props.movie.poster_src} alt='poster' />
                    </td>
                    <td>
                        <h1>{props.movie.title}</h1>
                        <p>{props.movie.overview}</p>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default MovieRow;
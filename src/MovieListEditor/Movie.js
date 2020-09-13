import React from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import '../assets/movie.css'

function Movie() {
    return (
        <div id="Movie" className="container">
            <MovieList/>
            <hr/>
            <MovieForm/>
        </div>
    )
}

export default Movie
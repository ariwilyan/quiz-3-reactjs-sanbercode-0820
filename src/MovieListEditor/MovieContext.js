import React, { useState, createContext } from "react";

export const MovieContext = createContext();

function MovieProvider(props) {
    const movieDataDefault = {
        id: null,
        title: '',
        description: '',
        year: 2020,
        duration: 120,
        genre: '',
        rating: 0,
        image_url: '',
    }

    const [movieData, setMovieData] = useState(null)
    const [inputMovieData, setInputMovieData] = useState(movieDataDefault)

    const value = {
        movieData,
        setMovieData,
        inputMovieData,
        setInputMovieData,
        movieDataDefault,
    }

    return (
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { MovieContext } from '../MovieListEditor/MovieContext';
import '../assets/home.css';

function Home() {
    const { movieData, setMovieData } = useContext(MovieContext)

    useEffect(() => {
        if (movieData === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => setMovieData(res.data))
        }
    }, [movieData, setMovieData])

    return (
        <div className="container">
            <h1>Daftar Film Terbaik</h1>
            {
                movieData !== null && movieData.map((item, index) => {
                    return (
                        <div key={index + Math.random()}>
                            <h2>{item.title}</h2>
                            <div className="flex-row">
                                <div className="movie-image">
                                    <img src={item.image_url} alt="movie shots/poster" />
                                </div>
                                <div className="movie-details">
                                    <h3>Rating  : {item.rating}</h3>
                                    <h3>Durasi  : {item.duration}</h3>
                                    <h3>Genre   : {item.genre}</h3>
                                </div>
                            </div>
                            <div className="movie-description">
                                <p><b>Description: </b>{item.description}</p>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import axios from 'axios';

function MovieForm() {
    const { movieData, setMovieData, inputMovieData, setInputMovieData, movieDataDefault } = useContext(MovieContext)

    const handleChange = (event) => {
        setInputMovieData({ ...inputMovieData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let { title, description, year, duration, genre, rating, image_url } = inputMovieData

        if (inputMovieData.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/movies`, { title, description, year, duration, genre, rating, image_url })
                .then(res => {
                    setMovieData([...movieData, res.data])
                })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${inputMovieData.id}`, { title, description, year, duration, genre, rating, image_url })
                .then(() => {
                    let replacementData = movieData.find(el => el.id === inputMovieData.id)
                    Object.assign(replacementData, inputMovieData)
                    setMovieData([...movieData])
                })
        }
        setInputMovieData(movieDataDefault)
    }

    return (
        <div id="movie-form">
            <h1>Movies Form</h1>
            <form onSubmit={handleSubmit} id="movie-edit-form" className="center">
                <div className="flex-row">
                    <label htmlFor="movie-form-title">Title:</label>
                    <input required
                        id="movie-form-title"
                        type="text"
                        name="title"
                        value={inputMovieData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-description">Description:</label>
                    <textarea required
                        id="movie-form-description"
                        type="text"
                        name="description"
                        value={inputMovieData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-year">Year:</label>
                    <input required
                        id="movie-form-year"
                        type="number"
                        name="year"
                        value={inputMovieData.year}
                        onChange={handleChange}
                        min="1980"
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-duration">Duration:</label>
                    <input required
                        id="movie-form-duration"
                        type="number"
                        name="duration"
                        value={inputMovieData.duration}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-genre">Genre:</label>
                    <input required
                        id="movie-form-genre"
                        type="text"
                        name="genre"
                        value={inputMovieData.genre}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-rating">Rating:</label>
                    <input required
                        id="movie-form-rating"
                        type="number"
                        name="rating"
                        value={inputMovieData.rating}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </div>
                <div className="flex-row">
                    <label htmlFor="movie-form-image_url">Image URL:</label>
                    <textarea required
                        id="movie-form-image_url"
                        type="text"
                        name="image_url"
                        value={inputMovieData.image_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="center">
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';
import axios from 'axios';

function MovieList() {
    const { movieData, setMovieData, setInputMovieData } = useContext(MovieContext)
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (query === '') {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => setMovieData(res.data))
        }
    }, [query, setMovieData])

    const handleDelete = (event) => {
        let selectedId = parseInt(event.target.value)
        let selectedData = movieData.filter(el => el.id !== selectedId)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`)
            .then(res => {
                console.log(res)
            })
        setMovieData(selectedData)
    }

    const handleEdit = (event) => {
        let selectedId = parseInt(event.target.value)
        let selectedData = movieData.find(el => el.id === selectedId)
        setInputMovieData(selectedData)
    }

    const findMovie = (query) => {
        let result = movieData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        setMovieData(result)
    }

    const handleQuery = (event) => {
        setQuery(event.target.value)
        findMovie(event.target.value)
    }

    const submitQuery = (event) => {
        event.preventDefault()
        findMovie(query)
    }

    return (
        <div id="movie-list">
            <form onSubmit={submitQuery} id="search-bar" className="center">
                <input type="search"
                    name="q"
                    id="movie-search"
                    placeholder="Search movie title..."
                    onChange={handleQuery}
                    value={query}
                />
                <button type="submit" className="button">Search</button>
            </form>

            <h1>Daftar Film</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieData !== null && movieData.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.year}</td>
                                    <td>{item.duration}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.rating}</td>
                                    <td>
                                        <button id="edit-button" className="button" onClick={handleEdit} value={item.id}>Edit</button>
                                        <button id="delete-button" className="button" onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MovieList
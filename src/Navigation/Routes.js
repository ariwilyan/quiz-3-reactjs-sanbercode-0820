import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import '../App.css';
import Navbar from './Nav';
import Home from '../Home/Home';
import About from '../About/About';
import MovieListEditor from '../MovieListEditor/Movie';
import Login from '../Login/Login';
import { AuthContext } from '../Login/AuthContext';
import Footer from './Footer';

export default function Routes() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <div className="App">
            <div id="App-navigation">
                <Navbar />
            </div>
            <div id="App-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/movie-edit">
                        {isLoggedIn ? <MovieListEditor /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
            <div id="App-footer">
                <Footer />
            </div>
        </div>
    )
}
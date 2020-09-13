import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Login/AuthContext';
import logo from '../img/logo.png'

function Nav() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <nav id="navbar" className="flex-row">
            <Link to="/">
                <div id="nav-logo">
                    <img src={logo} alt="Sanbercode logo" />
                </div>
            </Link>
            <div id="nav-links">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    {isLoggedIn &&
                        <Link to="/movie-edit">
                            <li>Movie List Editor</li>
                        </Link>
                    }
                    <Link to="/login">
                        <li>{isLoggedIn ? 'Logout' : 'Login'}</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
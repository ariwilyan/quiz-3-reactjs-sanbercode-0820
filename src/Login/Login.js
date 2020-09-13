import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../assets/login.css'

function Login() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()

    useEffect(() => {
        if (isLoggedIn) setIsLoggedIn(false)
    }, [isLoggedIn, setIsLoggedIn])


    const login = (event) => {
        event.preventDefault()
        if (username !== "admin" || password !== "admin") {
            alert("Incorrect username/password");
        } else {
            setIsLoggedIn(true)
            history.push("/")
        }
    }

    return (
        <div className="card-login">
            <h3 style={{ textAlign: "center", color: "skyblue", fontWeight: "bolder"}}>Sign In Sanbercode</h3>
            <hr className="line-login"/>
            <form onSubmit={login} id="login-form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input required type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input required type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="admin"/>
                </div>
                <div>
                    <button type="submit" className="button">LOGIN</button>
                </div>
            </form>
        </div>
    )
}

export default Login
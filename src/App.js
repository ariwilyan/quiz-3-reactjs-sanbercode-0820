import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Login/AuthContext';
import MovieProvider from './MovieListEditor/MovieContext';
import Routes from './Navigation/Routes';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </MovieProvider>
    </AuthProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
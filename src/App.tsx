import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Anime Caller</title>
      </Helmet>
      <header className="App-header">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <Header />
      </header>
      <Home />
    </div>
  );
}

export default App;

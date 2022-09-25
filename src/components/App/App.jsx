import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Gallery from '../Gallery/Gallery.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';
import Survey from '../Survey/Survey.jsx';
import Movies from '../Movies/Movies.jsx';
import Smartbet from '../Smartbet/Smartbet.jsx';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className='body-container'>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/smartbet">
              <Smartbet />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Footer />
          </div>
        </Router>
        
      </div>
    );
}

export default App;

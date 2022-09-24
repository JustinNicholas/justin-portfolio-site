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

function App() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className='nav-bar'>
              <ul>
                  <li><Link to='/smartbet'>SMARTBET</Link></li>
                  <li><Link to='/gallery'>PHOTO GALLERY</Link></li>
                  <li><Link to='/survey'>SURVEY LOOP</Link></li>
                  <li><Link to='/movies'>MOVIES LIST</Link></li>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/'>HOME</Link></li>
              </ul>
          </div>
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
        </Router>
      </div>
    );
}

export default App;

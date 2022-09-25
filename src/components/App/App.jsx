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
          {/* <div className='nav-bar'>
              <ul className='nav-links-block'>
                  <li className='nav-link'><Link className='nav-link-text' to='/smartbet'>SMARTBET</Link></li>
                  <li className='nav-link'><Link className='nav-link-text' to='/gallery'>PHOTO GALLERY</Link></li>
                  <li className='nav-link'><Link className='nav-link-text' to='/survey'>SURVEY LOOP</Link></li>
                  <li className='nav-link'><Link className='nav-link-text' to='/movies'>MOVIES LIST</Link></li>
                  <li className='nav-link'><Link className='nav-link-text' to='/about'>ABOUT</Link></li>
                  <li className='nav-link'><Link className='nav-link-text' to='/'>HOME</Link></li>
              </ul>
          </div> */}
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
          </div>
        </Router>
        
      </div>
    );
}

export default App;

import { useHistory } from "react-router-dom";
import './Header.css';

function Header() {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    const goToPage = (url) => {
        history.push('/' + url)
    }

    return(
        <header className="App-header">
            {/* <img onClick={() => goHome()} className='hero-image' src={process.env.PUBLIC_URL + '/images/Hero.svg'} alt="" /> */}
            <img onClick={() => goHome()} className='header-logo' src={process.env.PUBLIC_URL + '/images/JustinCustomLogo.svg'} alt="" />
            {/* <h1 className="App-title">JUSTIN NICHOLAS</h1> */}
            <div className='hero-nav-bar'>
              <ul className='hero-nav-links-block'>
                  {/* <li className='hero-nav-link' onClick={() => goToPage('smartbet')}>SMARTBET</li>
                  <li className='hero-nav-link' onClick={() => goToPage('gallery')}>PHOTO GALLERY</li>
                  <li className='hero-nav-link' onClick={() => goToPage('survey')}>SURVEY LOOP</li>
                  <li className='hero-nav-link' onClick={() => goToPage('movies')}>MOVIES LIST</li> */}
                  <li className='hero-nav-link' onClick={() => goToPage('about')}>ABOUT</li>
                  <li className='hero-nav-link' onClick={() => goToPage('')}>HOME</li>
              </ul>
            </div>
            <div className="name-and-title">
                <p className="name-text">JUSTIN NICHOLAS</p>
                <p className="title-text">Full Stack Software Engineer</p>
            </div>
        </header>
    )
}

export default Header;
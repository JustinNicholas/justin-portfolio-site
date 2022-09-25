import { useHistory } from "react-router-dom";
import './Footer.css';

function Footer() {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return(
        <footer className="footer-bar">
            <div className="footer-container">
                <img onClick={() => goHome()} className='footer-logo' src={process.env.PUBLIC_URL + '/images/JustinCustomLogo.svg'} alt="" />
                <p className="no-margin-text copy-year">&copy; 2022</p>
                <a href="mailto:justinnicholas907@gmail.com" target="_blank" className="no-margin-text footer-links">EMAIL</a>
                <a href="https://github.com/JustinNicholas" target="_blank" className="no-margin-text footer-links">GITHUB</a>
                <a href="https://www.linkedin.com/in/justin-nicholas-p/" target="_blank" className="no-margin-text footer-links">LINKEDIN</a>
            </div>
        </footer>
    )
}

export default Footer;
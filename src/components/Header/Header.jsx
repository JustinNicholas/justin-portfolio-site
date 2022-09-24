import { useHistory } from "react-router-dom";
import './Header.css';

function Header() {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return(
        <header className="App-header">
            <img onClick={() => goHome()} className='header-logo' src={process.env.PUBLIC_URL + '/images/JustinCustomLogo.svg'} alt="" />
            <h1 className="App-title">My Portfolio</h1>
        </header>
    )
}

export default Header;
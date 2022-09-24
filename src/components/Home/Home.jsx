import './Home.css'
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const goToDetails = (url) => {
        history.push('/' + url)
    }

    return(
        <div>
            <h1>Home</h1>
            <div onClick={() => goToDetails('gallery')}>
                <h1>PHOTO GALLERY</h1>
                <img className="home-page-image" src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                {/* https://hidden-temple-08817.herokuapp.com/ */}
            </div>
            <div onClick={() => goToDetails('survey')}>
                <h1>SURVEY LOOP</h1>
                <img className="home-page-image" src={process.env.PUBLIC_URL + '/images/FeedbackLoop.png'} />
                {/* https://powerful-badlands-86886.herokuapp.com/#/ */}
            </div>
            <div onClick={() => goToDetails('movies')}>
                <h1>MOVIE INFO</h1>
                <img className="home-page-image" src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                {/* https://mysterious-everglades-79851.herokuapp.com/#/ */}
            </div>
            <div onClick={() => goToDetails('smartbet')}>
                <h1>SMARTBET</h1>
                <img className="home-page-image" src={process.env.PUBLIC_URL + '/images/smartbet.png'} />
                {/* https://evening-peak-50040.herokuapp.com/ */}
            </div>
        </div>
    )
}

export default Home;
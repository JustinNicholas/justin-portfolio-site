import './Home.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Home() {

    const history = useHistory();

    const goToDetails = (url) => {
        history.push('/' + url)
    }
    const mouseEnter = (num) => {
        setHoverStatus(num);
    }

    const mouseLeave = () => {
        setHoverStatus(0);
    }
    const [hoverStatus, setHoverStatus] = useState(0);

    return(
        <div className='home-page-card-container'>
            <div className='home-image-card' onClick={() => goToDetails('smartbet')} onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave()} >

                <div className='hidden-text-container'>
                    <div className='padded-text-container'>
                        <p className='hidden-text'>SMARTBET</p>
                        <p className='hidden-text'>My Prime Solo project. Tracks bets. Yada yada...</p>
                    </div>
                    <div className='view-page-card-footer'>
                        <p className='hidden-text'>VIEW</p>
                    </div>
                </div>

                <img className={ hoverStatus == 1 ? "home-page-image-to-back" : "home-page-image"} src={process.env.PUBLIC_URL + '/images/smartbet.png'} />
                {/* https://evening-peak-50040.herokuapp.com/ */}
            </div>
            <div className='home-image-card' onClick={() => goToDetails('gallery')} onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave()} >
                <div className='hidden-text-container'>
                    <div className='padded-text-container'>
                        <p className='hidden-text'>GALLERY</p>
                        <p className='hidden-text'>My Prime Solo project. Tracks bets. Yada yada...</p>
                    </div>
                    <div className='view-page-card-footer'>
                        <p className='hidden-text'>VIEW</p>
                    </div>
                </div>

                <img className={ hoverStatus == 2 ? "home-page-image-to-back" : "home-page-image"} src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                {/* https://hidden-temple-08817.herokuapp.com/ */}
            </div>
            <div className='home-image-card' onClick={() => goToDetails('movies')} onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave()} >
                <div className='hidden-text-container'>
                    <div className='padded-text-container'>
                        <p className='hidden-text'>MOVIES</p>
                        <p className='hidden-text'>My Prime Solo project. Tracks bets. Yada yada...</p>
                    </div>
                    <div className='view-page-card-footer'>
                        <p className='hidden-text'>VIEW</p>
                    </div>
                </div>

                <img className={ hoverStatus == 3 ? "home-page-image-to-back" : "home-page-image"} src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                {/* https://mysterious-everglades-79851.herokuapp.com/#/ */}
            </div>
            <div className='home-image-card' onClick={() => goToDetails('survey')} onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseLeave()} >
                <div className='hidden-text-container'>
                    <div className='padded-text-container'>
                        <p className='hidden-text'>SURVEY</p>
                        <p className='hidden-text'>My Prime Solo project. Tracks bets. Yada yada...</p>
                    </div>
                    <div className='view-page-card-footer'>
                        <p className='hidden-text'>VIEW</p>
                    </div>
                </div>

                <img className={ hoverStatus == 4 ? "home-page-image-to-back" : "home-page-image"} src={process.env.PUBLIC_URL + '/images/FeedbackLoop.png'} />
                {/* https://powerful-badlands-86886.herokuapp.com/#/ */}
            </div>

        </div>
    )
}

export default Home;
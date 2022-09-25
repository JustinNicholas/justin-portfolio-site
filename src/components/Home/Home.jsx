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
                        <p className='hidden-text'>This was my solo project! Finished in a two week sprint, this app allows users to bet on NFL games. Wins and losses are automatically calculated at Midnight and charted out for users to easily see their net earnings.</p>
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
                        <p className='hidden-text'>My photo gallery app was my first react app. It allows users to add images and descriptions. It also allows users to like and delete images</p>
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
                        <p className='hidden-text'>My Movies list was my first projects using redux sagas! This app allows users to add movies with a description and multiple genres. Users can also filter the movies by genres. I'm also very proud of the neon sign header I made on this!</p>
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
                        <p className='hidden-text'>This app is a survey that takes users through a loop for each question. It also features an admin page where all responses can be viewed. This app has a convient progress bar and a confetti burst on submission!</p>
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
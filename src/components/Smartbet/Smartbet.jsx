import './Smartbet.css';

function Smartbet() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/smartbet.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>SMARTBET</h1>
                    <p className='no-margin-text'>This was my solo project! Finished in a two week sprint, this app allows users to bet on NFL games. Wins and losses are automatically calculated at Midnight and charted out for users to easily see their net earnings.</p>
                    <br />
                    <a href="https://evening-peak-50040.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Smartbet;
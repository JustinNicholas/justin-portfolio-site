import './Gallery.css';

function Gallery() {

    return(
            <div className="details-container">
                <h1 className='no-margin-header'>PHOTO GALLERY</h1>
                <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                {/* https://hidden-temple-08817.herokuapp.com/ */}
                <br />
                <a href="https://hidden-temple-08817.herokuapp.com/ ">View Site</a>
            </div>
    )
}

export default Gallery;
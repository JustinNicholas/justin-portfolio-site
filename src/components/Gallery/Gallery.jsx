

function Gallery() {

    return(
        <div>
            <div>
                <h1>PHOTO GALLERY</h1>
                <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                {/* https://hidden-temple-08817.herokuapp.com/ */}
                <a href="https://hidden-temple-08817.herokuapp.com/ ">View Site</a>
            </div>
        </div>
    )
}

export default Gallery;
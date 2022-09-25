

function Gallery() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>PHOTO GALLERY</h1>
                    <p className='no-margin-text'> This is wher the description will go.w qdf fgwtg wrtherh ertfgwg</p>
                    <br />
                    <a href="https://hidden-temple-08817.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Gallery;


function Gallery() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/ReactGallery.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>PHOTO GALLERY</h1>
                    <p className='no-margin-text'>Duration: Weekend (Aug 12th - 14th)</p>
                    <br />
                    <p className='no-margin-text'>For this project I created a gallery page to share pictures.</p>
                    <br />
                    <p className='no-margin-text'>Visitors can add to the gallery by inserting an image address and discription in the fields at the top of the page. Within the gallery, visitors can click on an image to see the description and use a button to like or remove an image. The total likes for each image is displayed within each image card.</p>
                    <br />
                    <h4 className='no-margin-header'>TECHNOLOGIES USED</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>JSX</li>
                        <li>Bootstrap</li>
                        <li>PostgreSQL</li>
                        <li>Express.js</li>
                        <li>Axios</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PG</li>
                    </ul>
                    <a href="https://hidden-temple-08817.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Gallery;
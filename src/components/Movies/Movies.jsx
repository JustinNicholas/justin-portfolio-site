

function Movies() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>MOVIE INFO</h1>
                    <br />
                    <p className='no-margin-text'>Duration: Weekend (Aug 26th - 28th)</p>
                    <br />
                    <p className='no-margin-text'>For this project I created a gallery of movies that can be clicked on to be brought to the movies description and genres.</p>
                    <br />
                    <p className='no-margin-text'>Users can also add new movies to the gallery by adding a title, description, image url, and multiple categories in the Add Movie page. Lasty, users can filter the movies by genres.</p>
                    <br />
                    <h4 className='no-margin-header'>TECHNOLOGIES USED</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Redux Sagas</li>
                        <li>Node.js</li>
                        <li>JSX</li>
                        <li>Material UI</li>
                        <li>PostgreSQL</li>
                        <li>Express.js</li>
                        <li>Axios</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PG</li>
                    </ul>
                    <a href="https://mysterious-everglades-79851.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Movies;
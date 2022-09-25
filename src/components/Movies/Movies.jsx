

function Movies() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>MOVIE INFO</h1>
                    <p className='no-margin-text'> This is wher the description will go.w qdf fgwtg wrtherh ertfgwg</p>
                    <br />
                    <a href="https://mysterious-everglades-79851.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Movies;
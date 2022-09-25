

function Movies() {

    return(
        <div>
            <div className="details-container">
                <h1 className='no-margin-header'>MOVIE INFO</h1>
                <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                {/* https://mysterious-everglades-79851.herokuapp.com/#/ */}
                <br />
                <a href="https://mysterious-everglades-79851.herokuapp.com/" target="_blank">View Site</a>
            </div>
        </div>
    )
}

export default Movies;
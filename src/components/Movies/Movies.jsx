

function Movies() {

    return(
        <div>
            <div>
                <h1>MOVIE INFO</h1>
                <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/MoviesSagas.png'} />
                {/* https://mysterious-everglades-79851.herokuapp.com/#/ */}
            </div>
        </div>
    )
}

export default Movies;
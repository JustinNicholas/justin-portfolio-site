

function Survey() {

    return(
            <div className="details-container">
                <h1 className='no-margin-header'>SURVEY LOOP</h1>
                <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/FeedbackLoop.png'} />
                <br />
                <a href="https://powerful-badlands-86886.herokuapp.com/" target="_blank">View Site</a>
            </div>
    )
}

export default Survey;


function Survey() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/FeedbackLoop.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>SURVEY LOOP</h1>
                    <p className='no-margin-text'> This is wher the description will go.w qdf fgwtg wrtherh ertfgwg</p>
                    <br />
                    <a href="https://powerful-badlands-86886.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Survey;
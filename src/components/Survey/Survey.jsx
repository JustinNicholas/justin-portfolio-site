

function Survey() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/FeedbackLoop.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>SURVEY LOOP</h1>
                    <p className='no-margin-text'>Duration: Weekend (Aug 19th - 21st)</p>
                    <br />
                    <p className='no-margin-text'>For this project I created a feedback survey.</p>
                    <br />
                    <p className='no-margin-text'>Visitors are funneled through the form by filling out required questions in the form and clicking the next button. Users hit a review page where they can make any final edits. When a user submits their form they are greeted with confetti and routed to a complete page where they can click a button to go back through the form and enter new feedback.</p>
                    <br />
                    <h4 className='no-margin-header'>TECHNOLOGIES USED</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Redux</li>
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
                    <a href="https://powerful-badlands-86886.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Survey;
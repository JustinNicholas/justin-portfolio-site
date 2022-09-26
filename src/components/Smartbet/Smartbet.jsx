import './Smartbet.css';

function Smartbet() {

    return(
            <div className="details-container">
                <div className='image-container'>
                    <img className="info-page-image" src={process.env.PUBLIC_URL + '/images/smartbet.png'} />
                </div>
                <div className='description-container'>
                    <h1 className='no-margin-header'>SMARTBET</h1>
                    <p className='no-margin-text'>Duration: 2 Week Sprint (Sep 5th - 19th)</p>
                    <br />
                    <p className='no-margin-text'>For this project I created a gambling tracking app.</p>
                    <br />
                    <p className='no-margin-text'>This app allows users to bet on NFL games. Wins and losses are automatically calculated at midnight and charted out for users to easily see their net earnings. Users are able to see final scores of previous games and tere most and least profitable teams.</p>
                    <br />
                    <p className='no-margin-text'>This app requires users to log in. If you would like to see this app, please feel free to use the account info below.</p>
                    <br />
                    <p className='no-margin-text'>Username: User123</p>
                    <br />
                    <p className='no-margin-text'>Password: tester1!</p>
                    <br />
                    {/* <ul>
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
                    </ul> */}
                    <a href="https://evening-peak-50040.herokuapp.com/" target="_blank">View Site</a>
                </div>
            </div>
    )
}

export default Smartbet;
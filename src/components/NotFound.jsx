import React from 'react'
import {Link, withRouter} from 'react-router-dom'




const NotFound = () => {
    return (
        <div className="homeWrapper" >
            <div className="homeInnerWrapper">
                <h1>Sorry, Page not found </h1>
                <Link to="/">
                <button>Return to Homepage</button>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(NotFound)
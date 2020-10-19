import React from 'react'
import Squad  from '../images/squad.jpg'

function Home() {
    return (
        <div className="homeWrapper" >
            <div className="homeInnerWrapper" >
            <h1>I am the home page</h1>
            <img src={Squad} alt="Dexter's Crew" className="homeImage" />
        </div>
        </div>
        
    )
}

export default Home

import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import Dexter from "../images/dex.png";
import Logo from "../images/dexterlogo.png";



const Navbar = () => {
    return (
        <div className="navBar" >
            <ul className="navBar" >
                <img src={Dexter} alt="Dexter" />
                <img src={Logo} alt="Moogle" />
                <li>
                    <NavLink to="/mandark">Mandark's Quiz</NavLink>
                </li>
                <li>
                <NavLink to="/deedee">Mandark's Quiz</NavLink>
                </li>
                <li>
                <NavLink to="/home">Mandark's Quiz</NavLink>
                </li>
            </ul>
        </div>
    )
}



export default withRouter(Navbar)

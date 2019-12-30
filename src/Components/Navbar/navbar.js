import React from 'react';
import './style.css';
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    //Set screen to top
    window.onload = () => {
        const home = document.getElementById('home-link');
        home.addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
    };

       

    return (
        <div id="navbar" className="z-depth-0 navbar-fixed">
            
            <nav className="no-shadow">
                <div className="nav-wrapper">
                    <span id="name" className="right">Mauricio Hernandez</span>
                <ul className="left hide-on-med-and-down">
                    <li><Link id="home-link" to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>    
                    <li><Link to="/portfolio#portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio#contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
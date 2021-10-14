import React from "react";
import {Link} from 'react-router-dom';
import our  from '../assets/ourapp.png'


function Header () {
    return (
        <div className="header">
            <div className="container">
                <div className="header__top">
                    <div className="header__main">nufruit</div>
                    <div className="header__icon"> <Link to='#'>  <img src={our} alt="ourapp" /></Link></div>
                </div>

                <div className="header__content">
                    <h1 className="header__title">Life Changing <br/> weight <br/> loss.</h1>
                    <p className="header__subtitle">Tracking made easy</p>
                    <button className="header__butt">Start Now</button>
                </div>
            </div>
        </div>

    )
}

export default Header;
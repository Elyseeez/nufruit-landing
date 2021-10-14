import React from 'react';
import {Link} from 'react-router-dom';
import target from '../../assets/targetimg.png';
import store from '../../assets/appstore.png';



function Targets () {
    return (
        <div className="targets">
            <div className="container">
                <div className="targets__wrapper">
                    <div className="targets__image"> <img src={target} alt="banana" /></div>
                    <div className="targets__inner">
                    <h2 className="targets__title">Set your own targets.</h2>
                    <p className="targets__title">Our Well Balanced goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                    <div className="header__icon"> <Link to='#'>  <img src={store} alt="ourapp" /></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Targets;
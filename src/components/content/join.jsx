import React from 'react'; 
import {Link} from 'react-router-dom';
import store from '../../assets/appstoresecond.png';
import intake from '../../assets/intake.png';

function Join () {
    return (
        <div className="join">
            <div className="container">
                <div className="join__wrapper">
                    <div className="join__inner">
                    <h2 className="join__title">Join free <br/> for 7 days</h2>
                    <div className="join__icon"> <Link to='#'>  <img src={store} alt="ourapp" /></Link></div>
                    </div>
                    <div className="join__image"> <img src={intake} alt="img" /></div>
                </div>
            </div>
             </div>
    )
}


export default Join;
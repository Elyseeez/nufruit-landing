import React from 'react'; 
import {Link} from 'react-router-dom';
import store from '../../assets/appstore.png';
import kcal from '../../assets/kcal.png';
import bottom from '../../assets/bottom.png';


function Calories () { 
    return (
        <div className="calories">
            <div className="container">
                <div className="calories__wrapper">
                    <div className="calories__text">
                        <h2 className="calories__title">Calories <br/> tracking.</h2>
                        <p className="calories__subtitle">Our Well Balanced goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                        <div className="calories__icon"> <Link to='#'>  <img src={store} alt="ourapp" /></Link></div>
                    </div>
                    <div className="calories__image">
                        <img src={kcal} alt="kcal" /> 
                    </div>
                </div>
                <div className="calories__bottom">
                    <img src={bottom} alt="images" />
                </div>
            </div>
        </div>
    )
}


export default Calories;
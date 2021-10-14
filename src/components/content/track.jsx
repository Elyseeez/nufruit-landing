import React from 'react';
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png'



function Track () { 
    return (
        <div className="track">
            <div className="container">
                <div className="target__left"> 
                    <h2 className="target__title">Track <br/> anywhere,<br/> anytime.</h2>
                     
                         <div className="track__img-list">
                             <div className="track__group1">
                                 <img src={item1} alt="banana" /> 
                                 <img src={item2} alt="banana" />
                             </div>
                             <div className="track__group2">
                                 <img src={item3} alt="banana" />
                                 <img src={item4} alt="banana" />
                             </div>
                         </div>
                     
                </div>
                <div className="target__right">
                    <p className="target__subtitle">Over 250,000 foods <br/> with photos. Plus barcode scanning App.</p>
                    <div className="target__wrap">
                        <div className="target__first-item"> 
                            <h3>Our Well Balanced</h3>
                            <p>Goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                        </div>
                        <div className="target__second-item"> 
                            <h3>Barcode Scanner</h3>
                            <p>App on your phone or tablet. Or keep a food diary online via the website – whichever suits you best.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



export default Track;
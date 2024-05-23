import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Ways = () => {
    return (
        <div className='ways'>
            <Container>
                <div className="ways__item">
                    <div className="ways__form">
                        <div className="ways__title">
                            <h3>A quick way to discuss details</h3>
                        </div>
                        <div className="ways__text-areas">
                            <div className="ways__info">
                                <p>Name*</p>
                                <input type="text" placeholder="Your name"/>
                            </div>
                            <div className="ways__info">
                                <p>Phone*</p>
                                <input type="tel" placeholder="Your phone"/>
                            </div>
                            <div className="ways__info">
                                <p>Email</p>
                                <input type="email" placeholder="Your email"/>
                            </div>
                                <p>Massage*</p>
                            <div className="ways__info">
                                <input className='ways__text_areas-large' type="text" placeholder="Your massage"/>
                            </div>
                            <div className="ways__radio">
                                <input type="radio"/>
                                <p>I agree to receive communications from Createx Construction Bureau.</p>
                            </div>
                        </div>

                        <div className="ways__btn">
                            <button>send request</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Ways;
import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Partners = () => {
    return (
        <div className='partners'>
            <Container>
                <div className="partners__title title">
                    <h1>Supported by 12+ partners</h1>
                </div>
                <div className="partners__items">
                    <img src="public/img/client-logo.png" alt=""/>
                    <img src="public/img/client-logo2.png" alt=""/>
                    <img src="public/img/client-logo3.png" alt=""/>
                    <img src="public/img/client-logo4.png" alt=""/>
                    <img src="public/img/client-logo5.png" alt=""/>
                    <img className='partners__last_img' src="public/img/client-logo6.png" alt=""/>
                </div>
            </Container>
        </div>
    );
};

export default Partners;
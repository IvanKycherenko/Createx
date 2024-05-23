import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Services = () => {
    return (
        <div className="services">
            <Container>
                <div className="services__title title">
                    <h1>Our services</h1>
                    <p>Createx Construction Bureau is a construction giant with a full range of construction services.</p>
                </div>
                <div className="services__items">
                    <div className="services__item">
                        <img src="public/img/ic-construction.svg" alt=""/>
                        <p>Construction</p>
                    </div>
                    <div className="services__item">
                        <img src="public/img/ic-plan.svg" alt=""/>
                        <p>Project Development</p>
                    </div>
                    <div className="services__item">
                        <img src="public/img/ic-pantone.svg" alt=""/>
                        <p>Interior Design</p>
                    </div>
                    <div className="services__item">
                        <img src="public/img/ic-painting.svg" alt=""/>
                        <p>Repairs</p>
                    </div>
                </div>
                <div className="services__info">
                    <h3>Learn more about our services</h3>
                    <button>View services</button>
                </div>
            </Container>
        </div>
    );
};

export default Services;
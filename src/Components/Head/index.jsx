import React from 'react';
import './index.css'
import Container from "../Layout/Container/index.jsx";

const Head = () => {
    return (
        <div className='head'>
                    <div className="head__arrows arrow-left">
                        <a href="#">
                            <img src="public/img/Left.svg" alt=""/>
                        </a>
                    </div>
            <Container>
                <div className="head__container">
                    <div className="head__title">
                        <p>CREATE <p className='header__title_later-orange'>X</p>
                            CONSTRUCTION
                        </p>
                    </div>
                    <div className="head__info">
                        <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin
                            ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum
                            felis. </p>
                    </div>
                    <div className="head__btn">
                        <a href="#">
                            <button className='head__btn-transparent'>Learn more about us</button>
                        </a>
                        <a href="#">
                            <button className='head__btn-orange'>SUBMIT REQUEST</button>
                        </a>
                    </div>
                    <div className="head__slider_element">
                        <div className="head__slide slide_1">
                            <h3>01</h3>
                            <div className="head__slider_line">

                            </div>
                        </div>
                        <div className="head__slide slide_2">
                            <h3>02</h3>
                            <div className="head__slider_line">

                            </div>
                        </div>
                        <div className="head__slide slide_3">
                            <h3>03</h3>
                            <div className="head__slider_line">

                            </div>
                        </div>
                        <div className="head__slide slide_4">
                            <h3>04</h3>
                            <div className="head__slider_line">

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <div className="head__arrows arrow-right">
                <a href="#">
                    <img src="public/img/Right.svg" alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Head;
import React, { useState, useEffect } from 'react';
import './index.css';
import Container from "../Layout/Container/index.jsx";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleBurgerClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isActive]);

    return (
        <header>
            <Container>
                <div className="header__container">
                    <div className="header__menu">
                        <div className="header__logo">
                            <img src="/public/img/logo.svg" alt="logo"/>
                        </div>

                        <nav className={`header__nav ${isActive ? 'active' : ''}`}>
                            <a href="#">About Us</a>
                            <a href="#">Services</a>
                            <a href="#">Work</a>
                            <a href="#">News</a>
                            <a href="#">Contacts</a>
                        </nav>
                    </div>
                    <div className="header__contacts">
                        <div
                            className={`header__burger ${isActive ? 'active' : ''}`}
                            onClick={handleBurgerClick}
                        >
                            <span></span>
                        </div>
                        <div className="header__mobile">
                            <div className="header__mobile_img">
                                <a href="#"><img src="/public/img/iPhone.svg" alt=""/></a>
                            </div>
                            <div className="header__text">
                                <p>Call us</p>
                                <p className='header__num'><a href="#">(405) 555-0128</a></p>
                            </div>
                        </div>
                        <div className="header__mail">
                            <div className="header__mail_img">
                                <a href="#"><img src="/public/img/Chat.svg" alt=""/></a>
                            </div>
                            <div className="header__text">
                                <p>Talk to us</p>
                                <p className='header__gmail'><a href="#">hello@createx.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
);
};

export default Header;

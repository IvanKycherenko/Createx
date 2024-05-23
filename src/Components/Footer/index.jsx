import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footer__container">
                    <div className="footer__container_left">
                        <div className="footer__company_info">
                            <div className="footer__imgs">
                                <div className="footer__logo">
                                    <img src="public/img/footer-logo.svg" alt=""/>
                                </div>
                                <div className="footer__networks">
                                    <a href="#"><img src="public/img/F-Whatsapp.svg" alt=""/></a>
                                    <a href="#"><img src="public/img/F-Messanger.svg" alt=""/></a>
                                    <a href="#"><img src="public/img/F-Facebook.svg" alt=""/></a>
                                    <a href="#"><img src="public/img/F-Twitter.svg" alt=""/></a>
                                    <a href="#"><img src="public/img/F-YouTube.svg" alt=""/></a>
                                </div>
                            </div>
                            <div className="footer__text">
                                <p>Createx Construction Bureau has been successfully operating in the USA construction
                                    market since 2000. We are proud to offer you quality construction and exemplary
                                    service. Our mission is to set the highest standards for construction sphere.</p>
                            </div>
                        </div>
                        <div className="footer__questions">
                            <div className="footer__question_left">
                                <div className="footer__question_title">
                                    <h4>HEAD OFFICE</h4>
                                </div>
                                <div className="footer__question_contacts">
                                    <p className="footer__question-bold">Address:</p>
                                    <p className="footer__question_thin">8502 Preston Rd. Inglewood, New York</p>
                                </div>
                                <div className="footer__question_contacts">
                                    <p className="footer__question-bold">Call:</p>
                                    <p className="footer__question_thin">(405) 555-0128</p>
                                </div>
                                <div className="footer__question_contacts">
                                    <p className="footer__question-bold">Email:</p>
                                    <p className="footer__question_thin">hello@createx.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer__question_right">
                        <div className="footer__question_title">
                            <h4>WHO WE ARE</h4>
                        </div>
                        <div className="footer__question_info-about-us">
                            <p>About Us</p>
                            <p>Available Positions</p>
                            <p>Contacts</p>
                        </div>
                    </div>
                    <div className="footer__container_right">
                        <div className="footer__company_works">
                            <div className="footer__container_text-area">
                                <div className="footer__text-area_title">
                                    <h2>Let’s stay in touch</h2>
                                </div>
                                <div className="footer__text-area">
                                    <input type="text" placeholder="Your email address"/>
                                    <button>subscribe</button>
                                </div>
                                <div className="footer__under_text">
                                    <p>*Subscribe to our newsletter to receive communications and early updates from
                                        Createx
                                        Construction Bureau.</p>
                                </div>
                            </div>
                            <div className="footer__container_experience">
                                <div className="footer__experience_title">
                                    <h4>OUR EXPERIENCE</h4>
                                </div>
                                <div className="footer__experience_list">
                                    <p>Services</p>
                                    <p>Work</p>
                                    <p>News</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__container_bottom">
                    <div className="footer__bottom_text">
                        <p>© All rights reserved. Made with</p>
                        <img src="public/img/F-Heart.svg" alt=""/>
                        <p>by Createx Studio </p>
                    </div>
                    <div className="footer__bottom_btn">
                        <p>GO TO TOP</p>
                        <button><img src="public/img/Up-chevron.svg" alt=""/></button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
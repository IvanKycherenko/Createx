import React from 'react';
import Container from "../Layout/Container/index.jsx"
import './index.css'

const Clients = () => {
    return (
        <div className="clients">
            <Container>
                <div className="clients__container">
                    <div className="clients__title title">
                        <h1>What our clients are saying</h1>
                    </div>
                        <div className="clients__slider">
                            <div className="clients__info">
                                <img src="public/img/profile-image.png" alt=""/>
                                <p>Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur
                                    magna cillum consequat minim laboris cillum laboris voluptate minim proident
                                    exercitation ullamco. </p>
                            </div>
                            <div className="clients__items">
                                <div className="clients__bio">
                                    <p className='clients__bold bold'>Shawn Edwards</p>
                                    <p className='clients__thin thin'>Position, Company name</p>
                                </div>
                                <div className="clients__arrows">
                                    <div className="clients__circle">
                                        <a href="#"><img src="public/img/Left.svg" alt=""/></a>
                                    </div>
                                    <div className="clients__circle">
                                        <a href="#"><img src="public/img/Right.svg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <img className='clients__img' src="public/img/clients.jpg" alt=""/>
                        </div>
                </div>
            </Container>
        </div>
    );
};

export default Clients;
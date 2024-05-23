import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Container>
                <div className="portfolio__title">
                    <div className="portfolio__text">
                        <h1>Browse our selected projects <br/>
                            and learn more about our work</h1>
                    </div>
                    <div className="portfolio__arrows">
                        <div className="portfolio__circle">
                            <img src="public/img/Left.svg" alt=""/>
                        </div>
                        <div className="portfolio__circle">
                            <img src="public/img/Right.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="portfolio__items">
                    <div className="portfolio__item">
                        <div className="portfolio__img_1">
                        </div>
                        <div className="portfolio__item_text">
                            <p className='portfolio__bold bold'>Red Finger Building</p>
                            <p className='portfolio__thin thin'>Business Centers</p>
                            <button>View Project</button>
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <div className="portfolio__img_2">
                        </div>
                        <div className="portfolio__item_text">
                            <p className='portfolio__bold bold'>Cubes Building</p>
                            <p className='portfolio__thin thin'>Business Centers</p>
                            <button>View Project</button>
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <div className="portfolio__img_3">
                        </div>
                        <div className="portfolio__item_text">
                            <p className='portfolio__bold bold'>The Pencil Building</p>
                            <p className='portfolio__thin thin'>Business Centers</p>
                            <button>View Project</button>
                        </div>
                    </div>
                </div>
                <div className="portfolio__text">
                    <h3>Explore all our works</h3>
                    <button>View portfolio</button>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;
import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Values = () => {
    return (
        <div className="values">
            <Container>
                <div className="values__title title">
                    <h1>Our core values</h1>
                    <p>Our mission is to set the highest standards for construction sphere.</p>
                </div>
                <div className="values__items">
                    <div className="values__item">
                        <img src="public/img/ic-like.svg" alt=""/>
                        <p className="values__item-bold">Quality</p>
                        <p className="values__item-thin">Culpa nostrud commodo ea consequat aliquip reprehenderit.
                            Veniam velit nostrud aliquip sunt.</p>
                    </div>
                    <div className="values__line line-1">
                    </div>
                    <div className="values__item">
                        <img src="public/img/ic-hand.svg" alt=""/>
                        <p className="values__item-bold">Safety</p>
                        <p className="values__item-thin">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
                    </div>
                    <div className="values__line line-2">
                    </div>
                    <div className="values__item">
                        <img src="public/img/ic-slippers.svg" alt=""/>
                        <p className="values__item-bold">Comfort</p>
                        <p className="values__item-thin">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                    </div>
                </div>
                <div className="questions">
                    <div className="question__title">
                        <h3>Want to know more? Ask us a question:</h3>
                    </div>
                    <div className="questions__text_area">
                        <div className="questions__name">
                            <p>Name</p>
                            <input placeholder='Your name' type="text"/>
                        </div>
                        <div className="questions__phone">
                            <p>Phone</p>
                            <input placeholder='Your phone' type="text"/>
                        </div>
                        <div className="questions__massege">
                            <p>Massege</p>
                            <input placeholder='Your massegee' type="text"/>
                        </div>
                        <div className="questions__btn">
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Values;
import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Statistic = () => {
    return (
        <div className='statistic'>
            <Container>
                <div className="statistic__title title">
                    <h1>Some facts and figures</h1>
                </div>
                <div className="statistic__items">
                    <div className="statistic__circle_1">
                        <img src="public/img/circle-progress.png" alt=""/>
                        <p>Totally satisfied clients</p>
                    </div>
                    <div className="statistic__circle_1">
                        <img src="public/img/circle-progress2.png" alt=""/>
                        <p>Years of experience</p>
                    </div>
                    <div className="statistic__circle_1">
                        <img src="public/img/circle-progress3.png" alt=""/>
                        <p>Working hours spent</p>
                    </div>
                    <div className="statistic__circle_1">
                        <img src="public/img/circle-progress4.png" alt=""/>
                        <p>Succeeded projects</p>
                    </div>
                </div>
            </Container>
            <div className="news">
                <Container>
                    <div className="news__title title">
                        <h1>Recent news</h1>
                    </div>
                    <div className="news__items">
                        <div className="news__item_large">
                            <div className="news__img-large">
                                <img src="public/img/news.jpg" alt=""/>
                            </div>
                            <div className="news__info">
                                <div className="news__info_title">
                                    <a href='#'>How to Build Climate Change-Resilient Infrastructure</a>
                                </div>
                                <div className="news__social_info">
                                    <p>Industry News</p>
                                    <div className="news__line"></div>
                                    <p>June 24, 2020</p>
                                    <div className="news__line"></div>
                                    <div className="news__comment">
                                        <img src="public/img/news-chat.svg" alt=""/>
                                        <p>4 comments</p>
                                    </div>
                                </div>
                                <div className="news__info_text">
                                    <p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
                                </div>
                            </div>
                        </div>
                        <div className="news__item_twice">
                            <div className="news__item_twice-top">
                                <div className="news__img-small">
                                    <img src="public/img/news2.jpg" alt=""/>
                                </div>
                                <div className="news__info">
                                    <div className="news__info_title">
                                        <a href='#'>How Construction Can Help Itself</a>
                                    </div>
                                    <div className="news__social_info">
                                        <p>Innovation</p>
                                        <div className="news__line"></div>
                                        <p>June 12, 2020</p>
                                        <div className="news__line"></div>
                                        <div className="news__comment">
                                            <img src="public/img/news-chat.svg" alt=""/>
                                            <p>4 comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news__item_twice">
                                <div className="news__item_twice-bottom">
                                    <div className="news__img-small">
                                        <img src="public/img/news3.jpg" alt=""/>
                                    </div>
                                    <div className="news__info">
                                        <div className="news__info_title">
                                            <a href='#'>Types of Flooring Materials</a>
                                        </div>
                                        <div className="news__social_info">
                                            <p>Company News</p>
                                            <div className="news__line"></div>
                                            <p>December 1, 2019</p>
                                            <div className="news__line"></div>
                                            <div className="news__comment">
                                                <img src="public/img/news-chat.svg" alt=""/>
                                                <p>4 comments</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news__info_bottom">
                        <h3>Explore all our news posts</h3>
                        <button>View all news</button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Statistic;
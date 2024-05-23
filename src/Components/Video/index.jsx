import React from 'react';
import Container from "../Layout/Container/index.jsx";
import './index.css'

const Video = () => {
    return (
        <div className="video">
            <Container>
                <div className="video__title title">
                    <h1>We are Createx Construction Bureau </h1>
                    <p>We are rightfully considered to be the best construction company in the USA.</p>
                </div>
                <div className="video__player">
                    <div className="video__play_btn">
                        <button><img src="public/img/play-btn.svg" alt=""/></button>
                    </div>
                    <div className="video__mute_btn">
                        <button><img src="public/img/mute-btn.svg" alt=""/></button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Video;
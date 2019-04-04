// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom'
import video from '../src/img/My Video.webm';

const FirstPage = () => {
    return (
        <section>
            <header>
                <div className="background__video">
                    <div className="line11" />
                    <div className="line21" />
                    <div className="line12" />
                    <div className="line22" />
                    <nav className="nav">
                        <div className="nav__inner">
                            <h2 className="nav__logo">Mariusz</h2>
                            <ul className="lista">
                                <li>about</li>
                                <li>projects</li>
                                <li>contact</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="background__phone" />
                    <video
                        className="background__video-video"
                        muted=""
                        autoPlay="autoplay"
                        loop="loop"
                    >
                        <source src={video} type="video/webm" />
                    </video>
                    <script>document.getElementById('video').play();</script>
                    <div className="devh1">
                        <div className="line1" />
                        <div className="line2" />
                        <div className="line3" />
                        <div className="line4" />
                        <div className="line5" />
                        <div className="line6" />
                        <div className="line7" />
                        <div className="line8" />
                        <div className="line9" />
                        <h1 className="glitch" data-text="FrontEndDev">
                            FrontEndDev
                        </h1>
                        {/* <div class="glitch" data-text="GLITCH">GLITCH</div> */}
                    </div>
                </div>
            </header>
        </section>
    );
};

export default FirstPage;

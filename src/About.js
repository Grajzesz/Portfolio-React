// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
const About = () => {
    return (
        <section>
            <div className="container__about">
                <h2 className="container__about-title">About</h2>
                <div className="container__about-inner">
                    <div className="about__fast">
                        <div className="about__fast-pic">
                            <i className="fas fa-running" />
                        </div>
                        <div className="about__fast-title">
                            <h3>Fast</h3>
                        </div>
                        <div className="about__fast-text">
                            <p>
                            Websites don't have to be static, I love making
                                pages come to life.
                            </p>
                        </div>
                    </div>
                    <div className="about__creative">
                        <div className="about__creative-pic">
                            <i className="fas fa-chess" />
                        </div>
                        <div className="about__creative-title">
                            <h3>Creative</h3>
                        </div>
                        <div className="about__creative-text">
                            <p>
                                Websites don't have to be static, I love making
                                pages come to life.
                            </p>
                        </div>
                    </div>
                    <div className="about__learning">
                        <div className="about__learning-pic">
                            <i className="fas fa-book-reader" />
                        </div>
                        <div className="about__learning-title">
                            <h3>Learning</h3>
                        </div>
                        <div className="about__learning-text">
                            {' '}
                            <p>
                                Websites don't have to be static, I love making
                                pages come to life.
                            </p>
                        </div>
                    </div>
                    <div className="about__responsible">
                        <div className="about__responsible-pic">
                            <i className="fas fa-check-double" />
                        </div>
                        <div className="about__responsible-title">
                            <h3>Responsible</h3>
                        </div>
                        <div className="about__responsible-text">
                            <p>
                                Websites don't have to be static, I love making
                                pages come to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

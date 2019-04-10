// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__container-inner">
                    <ul>
                        <a href="#container__about">
                            {' '}
                            <li>about</li>
                        </a>
                        <a href="#tech__container">
                            {' '}
                            <li>techs</li>
                        </a>
                        <a href="#projects__container">
                            {' '}
                            <li>projects</li>
                        </a>
                        <a href="#form__container-title">
                            {' '}
                            <li>contact</li>
                        </a>
                        {/* <a href="">
                            <li>licenses</li>
                        </a> */}
                    </ul>
                </div>
                <div className="social">
                    <div className="social__icons">
                        <a href="https://www.facebook.com/mariusz.buskiewicz.10">
                            <div className="fb">
                                <i className="fab fa-facebook-f" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/El_maarr/">
                            <div className="insta">
                                <i className="fab fa-instagram" />
                            </div>
                        </a>
                        <a href="https://pl.linkedin.com/in/mariusz-buśkiewicz-8631b1173">
                            <div className="linked">
                                <i className="fab fa-linkedin-in" />
                            </div>
                        </a>
                        <a href="https://github.com/Grajzesz">
                            <div className="github">
                            <i class="fab fa-github"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

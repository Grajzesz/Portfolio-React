// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
const Footer = () => {

        return (
            <footer>
                <div className="footer__container">
                    <div className="footer__container-inner">
                        <ul>
                            <a href="">
                                {' '}
                                <li>O Mnie</li>
                            </a>
                            <a href="">
                                {' '}
                                <li>Technologie</li>
                            </a>
                            <a href="">
                                {' '}
                                <li>Projekty</li>
                            </a>
                            <a href="">
                                {' '}
                                <li>Kontakt</li>
                            </a>
                            <a href="">
                                <li>Licencje</li>
                            </a>
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
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

export default Footer;

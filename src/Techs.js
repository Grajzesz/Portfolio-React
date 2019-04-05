// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
const Techs = () => {
    return (
        <section>
            <div className="tech__container">
                <div className="tech__container-inner">
                    <div className="htmle">
                        <i className="fab fa-html5" />
                    </div>
                    <div className="sassy">
                        <i className="fab fa-sass" />
                    </div>
                    <div className="cssy">
                        <i className="fab fa-css3-alt" />
                    </div>

                    <div className="reacty">
                        <i className="fab fa-react" />
                    </div>
                    <div className="jscripty">
                        <i className="fab fa-js-square" />
                    </div>
                    <div className="nody">
                        <i className="fab fa-node" />
                    </div>
                    <div className="gity">
                        <i className="fab fa-git-square" />
                    </div>

                    <div className="wordpressy">
                        <i className="fab fa-wordpress" />
                    </div>
                </div>
            </div>
            <div className="school__container">
                <div className="school__container-inner">
                    <div className="school__coders-logo" />
                    <div className="school__alx-logo" />
                </div>
            </div>
            <div className="school_container-lists">
                <div className="school__coders-main">
                    <h2 className="school__coders-list-title">
                        KURS JAVA SCRIPT DEVELOPER REACT
                    </h2>
                    <div className="school__coders-list">
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                            <li>ECMAScript6</li>
                            <li>Git</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>RWD</li>
                        </ul>
                    </div>
                </div>
                <div className="school__alx-main">
                    <h2 className="school__alx-list-title">
                        TWORZENIE STRON WWW
                    </h2>
                    <div className="school__alx-list">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Grafika WWW</li>
                            <li>WWW</li>
                            <li>jQuery</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techs;

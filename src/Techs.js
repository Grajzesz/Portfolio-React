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
                
                    <div className="jqueryy">
                        <img src="https://img.icons8.com/ios/50/000000/jquery-filled.png" />
                    </div><div className="gity">
                        <i className="fab fa-git-square" />

                    </div>
                    <div className="nody">
                        <i className="fab fa-node" />
                    </div>
                    <div className="wordpressy">
                        <i className="fab fa-wordpress" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techs;

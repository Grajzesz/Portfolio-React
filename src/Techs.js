// import React, { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
const Techs = () => {
    return (
        <section>
            <div className="tech__container">
                <div className="tech__container-inner">
                    <div className="htmle" data-text="FrontEndDev">
                        <i className="fab fa-html5" />
                    </div>
                    <div className="sassy" data-text="FrontEndDev">
                        <i className="fab fa-sass" />
                    </div>
                    <div className="cssy" data-text="FrontEndDev">
                        <i className="fab fa-css3-alt" />
                    </div>

                    <div className="reacty" data-text="FrontEndDev">
                        <i className="fab fa-react" />
                    </div>
                    <div className="jscripty" data-text="FrontEndDev">
                        <i className="fab fa-js-square" />
                    </div>
                    <div className="jqueryy" data-text= {<img src="https://img.icons8.com/ios/50/000000/jquery-filled.png" />}>
                        <img src="https://img.icons8.com/ios/50/000000/jquery-filled.png" />
                    </div><div className="gity" data-text="FrontEndDev">
                        <i className="fab fa-git-square" />

                    </div>
                    <div className="nody" data-text="FrontEndDev">
                        <i className="fab fa-node" />
                    </div>
                    <div className="wordpressy" data-text="FrontEndDev">
                        <i className="fab fa-wordpress" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techs;

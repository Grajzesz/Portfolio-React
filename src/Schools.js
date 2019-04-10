import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
class Schools extends Component {
    state = {
        show: false
    };
    toggle = () => {
        var res = this.state.show;
        this.setState({ show: !res });
        console.log('lalal');
    };
    render() {
        return (
            <section className="schools">
                <div className="school__container">
                    {' '}
                    <h2 className="school__container-title">Education</h2>
                    <div className="school__container-inner">
                        <div className="school__coders-logo" />
                        <div className="school__alx-logo" />
                    </div>
                    <div className="school__button-container">
                        <div className="school__button" onClick={this.toggle}>
                            <i className="fas fa-chevron-circle-down" />
                        </div>
                    </div>
                </div>
                {this.state.show ? (
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
                ) : null}
            </section>
        );
    }
}

export default Schools;

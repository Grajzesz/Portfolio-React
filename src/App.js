import React, { Component } from 'react';
import FirstPage from './FirstPage';
import About from './About';
import Footer from './Footer';
import Techs from './Techs';
import Schools from './Schools';
import '../src/css/reset.css';
import '../src/css/main.css';

class App extends Component {
    render() {
        return (
            <section className="full">
                <FirstPage />
                <About />
                <Techs />
                <Schools />
                <Footer />
            </section>
        );
    }
}
export default App;

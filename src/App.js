import React, { Component } from 'react';
import FirstPage from './FirstPage';
import About from './About';
import AboutText from './AboutText';
import Footer from './Footer';
import Techs from './Techs';
import Schools from './Schools';
import Projects from './Projects';
import Contact from './Contact';
import '../src/css/reset.css';
import '../src/css/main.css';

class App extends Component {
    render() {
        return (
            <section className="full">
                <FirstPage />
                <About />
                <AboutText />
                <Techs />
                <Schools />
                <Projects />
                <Contact />
                <Footer />
            </section>
        );
    }
}
export default App;

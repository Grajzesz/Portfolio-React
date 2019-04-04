import React, { Component } from 'react';
import FirstPage from './FirstPage';
import Footer from './Footer';
import Techs from './Techs';
import '../src/css/reset.css';
import '../src/css/main.css';

class App extends Component {
    render() {
        return (
            <section className="full">
                <FirstPage />
                <Techs />
                <Footer />
            </section>
        );
    }
}
export default App;

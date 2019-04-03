import React, { Component } from 'react';
import FirstPage from './FirstPage';
import Footer from './Footer';
import '../src/css/reset.css';
import '../src/css/main.css';

class App extends Component {
    render() {
        return (
            <section className="full">
                <FirstPage />
                <Footer />
            </section>
        );
    }
}
export default App;

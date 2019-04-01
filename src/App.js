import React, { Component } from 'react';
import FirstPage from './FirstPage';
import Footer from './Footer';
import '../src/css/reset.css'; // Import regular stylesheet
import '../src/css/main.css'; // Import regular stylesheet

class App extends Component {
    render() {
        return (
            <div>
                <FirstPage />
                <Footer />
            </div>
        );
    }
}
export default App;

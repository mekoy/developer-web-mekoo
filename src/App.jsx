
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </div>
        );
    }
}

export default (App);
import React, { Component } from 'react';
import Navigation from './Navigation.js'

class Favourites extends Component {

    render() {
        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="container">
                    <h1>Hello from Favourites</h1>
                </div>
            </div>
            
        );
    }
}

export default Favourites;
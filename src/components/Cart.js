import React, { Component } from 'react';
import Navigation from './Navigation.js'

class Cart extends Component {

    render() {
        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="container">
                    <h1>Hello from Cart</h1>
                </div>
            </div>
        );
    }
}

export default Cart;
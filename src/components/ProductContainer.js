import React, { Component } from 'react';
import Product from './ProductItem.js';

class ProductContainer extends Component {

    render() {
        return (
            <div className="container">
                <Product />


            </div>
            
        );
    }
}

export default ProductContainer;
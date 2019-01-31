import React, { Component } from 'react';
import Product from './Product.js';
import Navigation from './Navigation.js';
import {ProductConsumer} from '../context.js';
import '../index.css';

class ProductList extends Component {

   
  render() {

        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
  
                <div className="container">
                    <ProductConsumer>
                    {(value)=>{
                        return value.products.map(product => {
                            return <Product 
                            key={product.product_id}
                            product={product}
                            />
                        })

                    }}
                </ProductConsumer>
                </div>
                

            </div>
        )
    }
}

export default ProductList;
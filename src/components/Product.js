import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {

    render() {
        const { name, value, price, description, product_id, inCart } = this.props.product;

        return (

            <div>
                <Link 
                    to={{
                    pathname: `/product/${product_id}`,
                    state: {
                      name: name,
                      value: value,
                      price: price,
                      description: description,
                      product_id: product_id,
                      inCart: inCart
                    }
                    }} 
                    type="hidden" >
                    <span style={{"display": "block"}}>
                        <div className={`color${product_id} box2`} title={name} ></div>
                    </span>
                </Link>

            </div>
        );
        
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.string,
        name:PropTypes.string,
        price:PropTypes.number,
        description: PropTypes.string,
        product_id: PropTypes.number,
        inCart: PropTypes.boolean
    }).isRequired
};

export default Product;
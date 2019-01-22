import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

class Product extends Component {

    render() {
        const { product_id, name, price, description, inCart } = this.props.product;

        return (

            <div>
                <Link 
                    to={{
                    pathname: `/product/${product_id}`,
                    state: {
                      name: name,
                      price: price,
                      description: description
                    }
                    }} 
                    type="hidden" >
                    <span style={{"display": "block"}}>
                        <div className={`color${product_id} box2`} title={name} ></div>
                    </span>
                </Link>

                <button 
                    //className="" 
                    disabled={inCart ? true : false} 
                    onClick = {() => {
                        console.log('added to the cart');   
                    }}
                    >
                    {inCart ? (
                        <p className="nappi" disabled>
                            {" "}
                            in cart
                        </p>
                    ) : (
                        <p>Lisää ostoskoriin</p>
                    )}
                
                </button>

            </div>
        );
        
    }
}

// Product.propTypes = {
//     product: PropTypes.shape({
//         id:PropTypes.number,
//         name:PropTypes.string,
//         price:PropTypes.number
//     }).isRequired
// };

export default Product;
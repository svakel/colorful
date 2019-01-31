import React, { Component } from 'react';
import Navigation from './Navigation.js'
import CartItem from './CartItem.js';
import { ProductConsumer } from '../context.js';

class Cart extends Component {

    render() {
        const cartTotalSum = 0;
        
        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="container-shopping">
                    <h5>Ostoskori</h5>
                    <table className="shoppingList">
                        <tbody>
                        <tr>
                            <th>Tuote</th>
                            <th>Hinta</th>
                            <th>Määrä</th>
                            <th>Yhteensä</th>
                        </tr>

                        <ProductConsumer>
                            {(value) => {
                                return value.cartProducts.map(cart => {

                                    return cart.inCart.map(cartRow => {
                                        
                                    const product = value.products.find(_product => {
                                        return _product.product_id === cartRow.product_id;
                                        // const subtotal = [];

                                        // cartTotalSum += product.price * cartRow.quantity;

                                    })
                                        
                                        return <CartItem
                                        key={cartRow.product_id}
                                        price={product.price}
                                        quantity={cartRow.quantity}
                                        subTotal={product.price * cartRow.quantity }
                                        product={product}
                                        cartRow={cartRow}
                                        />

                                    
                                    
                                    })
                                })
                            }}

                        </ProductConsumer>
                       
                        <tr>
                            <td>Yhteensä</td>
                            <td></td>

                        </tr>
                       
                        </tbody>
                    </table>
                   
                </div>
            </div>
        )
    }
}

export default Cart;
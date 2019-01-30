import React, { Component } from 'react';
import Navigation from './Navigation.js'
import CartItem from './CartItem.js';

class Cart extends Component {

    render() {
        
        const productDummyData = [{
            name: "red",
            price: 89.0,
            quantity: 2
        },
        {
            name: "black",
            price: 189.0,
            quantity: 1
        }]

        const listItems = productDummyData.map((item) =>
            <CartItem key={item.name}
            name={item.name}
            price={item.price}
            quantity={item.quantity} 
            />
            );

        // const totalSum = 


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
                        {listItems}
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
import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            quantity: this.props.quantity
        }
    }  

    render() {
        // const { name, price, quantity } = this.props.location.state
        const itemSum = this.state.price * this.props.quantity;

        
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.quantity}</td>
                <td>{itemSum}</td>
            </tr>
        );
    }
}

export default CartItem;
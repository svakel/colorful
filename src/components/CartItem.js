import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        const product_id = this.props.cartRow.product_id;
        // const cartRowSum = this.props.product.price * this.props.cartRow.quantity;
        
        console.log ('ID', product_id);
        console.log('cartRow', this.props.cartRow)
        console.log('product', this.props.product)

        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td >{this.props.cartRow.product_id}</td>
                <td>{this.props.cartRow.quantity}</td>
                <td>{this.props.subTotal}</td>
            </tr>
        );
    }
}

export default CartItem;
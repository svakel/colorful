import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

    //Provider
    //Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartProducts: []
        };
    }

    componentDidMount() {
        axios.all([
            axios.get('http://localhost:3001/colors'),
            axios.get('http://localhost:3001/cart')
        ])
        .then(axios.spread((responseColors, responseCart) => {
            this.setState({ products: responseColors.data })
            this.setState({ cartProducts: responseCart.data });
            console.log(responseCart.data)
        }))
        .catch(error => console.log(error));
    }
            // .get('http://localhost:3001/colors')
            // .then(responseColors => {
            //     this.setState({ products: responseColors.data })
            //     // console.log('tuotteet', this.state.products)
            // })
            // .get('http://localhost:3001/cart')
            // .then(responseCart => {
            //     this.setState({ cartProducts: responseCart.data })
            //     // console.log('cart', this.state.cartProducts)
            // })
    

    handleDetail = () => {
        console.log('hello from detail');
    }

    addToCart = () => {
        console.log('hello from add to cart');
    }

    // tester = () => {
    //     const temProducts = [...this]
    // }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
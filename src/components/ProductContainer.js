import React, { Component } from 'react';
import ProductItem from './ProductItem.js';
import Navigation from './Navigation.js';
import '../index.css';
import ProductServices from '../services/ProductServices.js';
import axios from 'axios';

// import '../App.css';
// const colors = ProductServices.getAll

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          colors: []
      };
    }


    // findColors = () => {
        
    // }

  componentDidMount() {
    // this.setState({colors: ProductServices.getAll()})
    //this.findColors();

    axios
        .get('http://localhost:3001/colors')
        .then(responseColors => {
            this.setState({ colors: responseColors.data })
        })
  }


  render() {

        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
            
                <div className="container">
                    {this.state.colors.map(color=> (
                        <ProductItem 
                            key={color.name}
                            id={color.product_id} 
                            index={color.product_id} 
                            name={color.name} 
                            value={color.value} 
                            description={color.description} />
                    ))}
                </div>
            </div>
        )
    }

}

export default ProductContainer;
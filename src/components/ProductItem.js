import React, { Component } from 'react';
import Product from './Product.js'

const ProductItem = (props) => {

    console.log('nimi', props.name)
    console.log('numero', props.index)

    const colorNumber = props.index;
    const result = `color${colorNumber} box`;
    const title = props.name;

    // renderProduct (){
    //     return(
    //         <div>
    //             <Product />

    //         </div>
    //     )
    // onClick={this.renderProduct}

    // }

    return (

        <div  className={result} title={title} >
         
        </div>
    );
    
}

export default ProductItem;
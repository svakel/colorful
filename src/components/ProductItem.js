import React  from 'react';
import { Link } from 'react-router-dom';


const ProductItem = (props) => {

    console.log('nimi', props.name)
    console.log('numero', props.index)

    const colorNumber = props.index;
    const result = `color${colorNumber} box`;
    const title = props.name;
    const id = props.id;

    const url = `/product/${id}`; 
    console.log('url', url) 

    return (

        <Link to={url} nro={id} type="hidden" >
            <span style={{"display": "block"}}>
                <div className={result} title={title} ></div>
            </span>
        </Link>
    );
    
}

export default ProductItem;
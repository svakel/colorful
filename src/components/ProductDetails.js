import React, { Component } from 'react';
import Navigation from './Navigation.js';
import { AddButton } from './Button.js'


class ProductDetails extends Component {
    // constructor(props) {
    //       super(props);
    //       this.state = {
    //         //   name: "",
    //         //   price: null,
    //         //   description: "",
    //           inCart: false
    //         }
    //       };

    // componentDidMount () {
    //     const { inCart } = this.props.location.state
    //     this.setState({ inCart: inCart });
    // }

    render() {
        const { name, price, description, inCart } = this.props.location.state
        const product_id = Number(this.props.match.params.id);
        const result2 = `color${product_id} product-box4`;

        console.log(inCart)
       
        return (
            <div>
                <Navigation />
                
                <div className="product-container ">
                    <div className="product-content-left">
                        <div className={result2} title={name}>
                        <div className="box2-2"></div>
                        {/* <div className="box2-3"></div>
                        <div className="box2-4"></div>  */}
                    </div>
                    </div>

                    <div className="product-content-right">
                        <div className="product-text">
                            <h3>{name} </h3>
                            <h5>Hinta: {price}  </h5>
                            {/* <h5>Korissa: {inCart.value}  </h5>
                            <h5>Korissa: {inCart ? 
                                (<span>lisätty</span>) : (<span>lisää koriin</span>) }  </h5> */}
                            
                            <div>
                                {description}
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <AddButton
                                    // disabled={this.state.inCart ? true : false }
                                    onClick = {() => {
                                        console.log('added to the cart');   
                                    }}>
                                    <span className="shopping-icon"> <i className="fas fa-shopping-bag" ></i></span>
                                    {inCart?
                                    (<span className="icon-text" disabled>tuote lisätty</span>):
                                    (<span className="icon-text">Lisää ostoskoriin </span>)}
                                    
                                    
                                    {/* <span className="icon-text">Lisää ostoskoriin </span> */}
                                </AddButton>

                                <AddButton>
                                    <span className="like-icon"><i className="far fa-heart" ></i></span>
                                    <span className="icon-text">Lisää toivelistaan </span>
                                </AddButton>

                            </div>
                            {/* <p>Ilmainen toimitus yli 120 € tilauksiin (normaali 5,95€) <span><strong>Toimitustiedot</strong></span></p> */}
                        </div>
                        <div className="other-products">
                        <h4>Katso myös nämä tuotteet</h4>
                        <div className="small-box-container">
                            {/* <div className="small-box color2"></div> */}
                            <div className="small-box color3"></div>
                            <div className="small-box color4"></div>
                            <div className="small-box color5"></div>
                        </div>
                    </div>



                    </div>
                    
                    
                </div>
            </div>
            
        );
    }
}

export default ProductDetails;
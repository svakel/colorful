import React, { Component } from 'react';
import Navigation from './Navigation.js';



class ProductDetails extends Component {
    constructor(props) {
          super(props);
          this.state = {
              name: "",
              price: null,
              description: ""
            }
          };

    componentDidMount () {
        const { name, price, description } = this.props.location.state
        this.setState({ name: name, price: price, description: description });
    }

    render() {
        const product_id = Number(this.props.match.params.id);
        const result2 = `color${product_id} box2`;
       
        return (
            <div>
                <Navigation />
                
                <div className="product-container ">
                    <div className="product-content-left">
                        <div className={result2} title={this.state.name}>
                        <div className="box2-2"></div>
                        <div className="box2-3"></div>
                        <div className="box2-4"></div> 
                    </div>
                    </div>

                    <div className="product-content-right">
                        <div className="product-text">
                            <h3>{this.state.name} </h3>
                            <h5>{this.state.price}  </h5>
                            <div>
                                {this.state.description}
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <button>Lisää ostoskoriin </button>
                                <button>Lisää toivelistalle </button>
                            </div>
                            <p>Ilmainen toimitus yli 120 € tilauksiin (normaali 5,95€) <span><strong>Toimitustiedot</strong></span></p>
                        </div>
                    </div>
                    
                    <div className="other-products">
                        <h4>Katso myös nämä tuotteet</h4>
                        <div className="small-box-container">
                            <div className="small-box color2"></div>
                            <div className="small-box color3"></div>
                            <div className="small-box color4"></div>
                            <div className="small-box color5"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductDetails;
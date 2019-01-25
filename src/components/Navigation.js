import React  from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <div>
            <header className="nav">
                <Link 
                    to="/"
                    style={{ textDecoration: 'none' }}>
                    <div className="logo"><h3>Colourful </h3></div>
                </Link>
            <div className="icons">
                <Link
                    to="/favourites"
                    style={{ textDecoration: 'none' }}>
                    <span className="like-icon"><i class="far fa-heart" ></i> </span>
                </Link>
            
                <Link
                    to="/cart"
                    style={{ textDecoration: 'none' }}>
                    <span className="shopping-icon"> <i className="fas fa-shopping-bag" /> </span>
                </Link>
                
            </div>
            </header>
        </div>
    )


}


export default Navigation;

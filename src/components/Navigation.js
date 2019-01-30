import React  from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button.js'


const Navigation = () => {

    return (
        <div>
            <header className="nav">
                <Link 
                    to="/"
                    style={{ textDecoration: 'none' }}>
                    <div className="logo"><h3>Colourful > </h3></div>
                </Link>
            <div className="icons">
                <Link
                    to="/favourites"
                    style={{ textDecoration: 'none' }}>
                    <ButtonContainer>
                        <span className="like-icon"><i className="far fa-heart" ></i></span>
                        <span className="icon-text">Toivelista </span>
                    </ButtonContainer>
                </Link>
            
                <Link
                    to="/cart"
                    style={{ textDecoration: 'none' }}>
                    <ButtonContainer>
                        <span className="shopping-icon"> <i className="fas fa-shopping-bag" ></i></span>
                        <span className="icon-text">Ostoskori </span>
                    </ButtonContainer>
                </Link>
                
            </div>
            </header>
        </div>
    )
}




export default Navigation;



import React, {useContext, useEffect, useState} from 'react';
import classes from './Header.module.css'
import {Link} from "react-router-dom";
import 'macro-css'
import {FavouritesCartContext} from "../../context/context";
import cart from "../../pages/Cart";
const Header = () => {
    const {cartItems, favourites} = useContext(FavouritesCartContext)
    const [numberItems, setNumberItems] = useState(cartItems.length)
    const [numberFavourites, setNumberFavourites] = useState(favourites.length)

    return (
        <header className={classes.header + ' header d-flex justify-between clear'}>
            <div className='headerLeft'>
                <Link to='/'>
                    <img src="../images/logoQPICK.svg" alt="logoQPICK"/>
                </Link>
            </div>
            <ul className={classes.headerRight}>
                <li>
                    <Link to='/favourites'>
                        <img src="../images/favourites.svg" alt="cartIcon"/>
                        {numberFavourites>0 ? <div className={classes.numberItems}></div> : null}
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <img src="../images/cartIcon.svg" alt="cartIcon"/>
                    </Link>
                </li>
            </ul>

        </header>
    );
};

export default Header;
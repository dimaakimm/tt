import React from 'react';
import classes from './CartButton.module.css'
const CartButton = ({totalPrice, onClick}) => {

    return (
        <div className={classes.cartTotalBlock}>
            <div className="finalPrice d-flex justify-between">
                <h3>ИТОГО</h3>
                <h3 className="priceValue">Р {totalPrice}</h3>
            </div>
            <button onClick={onClick} style={totalPrice ? null : {cursor: 'not-allowed', backgroundColor: 'grey', borderColor: 'grey'}} className={classes.confirmBtn}>Перейти к оформлению</button>
        </div>
    );
};

export default CartButton;
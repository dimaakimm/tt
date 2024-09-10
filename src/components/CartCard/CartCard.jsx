import React, {useContext, useState} from 'react';
import classes from './CartCard.module.css'
import {FavouritesCartContext} from "../../context/context";

const CartCard = ({initialAmount, price, title, img, id}) => {
    const {setCartItems} = useContext(FavouritesCartContext)
    const [amount, setAmount] = useState(initialAmount)
    const countTotalItemPrice = () => {
        return price*amount
    }
    const plusOnClick = () => {
        if (amount > 99)
            return
        setAmount(prev => prev + 1)
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    amount: item.amount + 1
                }
            }
            return item
        }))
    }
    const minusOnClick = () => {
        if (amount < 1)
            return
        setAmount(prev => prev - 1)
        setCartItems(prevCartItems => prevCartItems.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    amount: item.amount - 1
                }
            }
            return item
        }))
    }
    const deleteOnClick = () => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    return (
        <div className={classes.cartCard}>
            <img onClick={deleteOnClick} className={classes.delete} src="../images/delete.svg" alt="delete" width={25}/>
            <div className="cardLeft d-flex flex-column">
                <div className="cardLeftTop d-flex flex-row align-center">
                    <img className='cu-p mr-10' src={img} alt="img" width={140} height={130}/>
                    <div className={classes.infoTop}>
                        <h3>{title}</h3>
                        <div className={classes.price}>
                            <div className={classes.currentPrice}>{price} Р</div>
                        </div>
                    </div>
                </div>
                <div className="cardBottom d-flex justify-between">
                    <div className="cardLeftBottom d-flex flex-row">
                        <img onClick={minusOnClick} className='ml-15' src="../images/minus.svg" alt="minus"/>
                        <div className={classes.amount}>{amount}</div>
                        <img onClick={plusOnClick} src="../images/plus.svg" alt="plus"/>
                    </div>
                    <strong className="cardRightBottom mr-20">
                        {countTotalItemPrice()} Р
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
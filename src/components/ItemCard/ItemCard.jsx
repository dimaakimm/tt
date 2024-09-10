import React, { useContext} from 'react';
import classes from './ItemCard.module.css'
import {FavouritesCartContext} from "../../context/context";
const ItemCard = ({img, title, price, rate, id,  ...props}) => {
    const {cartItems, setCartItems, favourites, setFavourites} = useContext(FavouritesCartContext)
    console.log(123)
    const onClickLike = () => {
        if (favourites.includes(id)){
            setFavourites(favourites.filter(item => item !== id))
        }
        else {
            setFavourites(prev => [...prev, id])
        }
        console.log(favourites)
    }
    const onClickAdd = () => {
        if (cartItems.some(item => item.id === id)){
            setCartItems(cartItems.filter(item => item.id !== id))
        }
        else {
            setCartItems(cartItems => [...cartItems, {id: id, amount: 1}])
        }
        console.log(cartItems)
    }
    const checkIsAdded = () => {
        return cartItems.some(item => item.id === id)
    }
    const checkIsLiked = () => {
        return favourites.includes(id)
    }
    return (
        <div className={classes.itemCard}>
            <img className={classes.heart} onClick={onClickLike} width={30} src={checkIsLiked(id) ? '../images/liked.png' : '../images/unliked.png'} alt='like'/>
            <img className='cu-p' src={img} alt="img" width={150}/>
            <div className={classes.info}>
                <div className={classes.infoTop}>
                    <h3>{title}</h3>
                    <div className={classes.price}>
                        <div className={classes.currentPrice}>{price} Р</div>
                    </div>
                </div>
                <div className={classes.infoBottom}>
                    <div className="rating d-flex">
                        <img className='cu-p' src="../images/star.svg" alt="star"/>
                        <div className="ratingValue">{rate}</div>
                    </div>
                    <h3 onClick={onClickAdd} className='clear cu-p'>{checkIsAdded(id) ? 'Убрать' : 'Купить'}</h3>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
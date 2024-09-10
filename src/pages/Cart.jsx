import React, {useContext} from 'react';
import ItemCard from "../components/ItemCard/ItemCard";
import {FavouritesCartContext} from "../context/context";
import CartCard from "../components/CartCard/CartCard";
import CartButton from "../components/CartButton/CartButton";


const Cart = () => {
    const {cartItems, items, setCartItems} = useContext(FavouritesCartContext)

    const countTotalPrice = () => {
        let totalPrice = 0
        cartItems.forEach(cartItem => {
            const item = items.flatMap(category => category.items).find(item => item.id === cartItem.id);
            if (item) {
                totalPrice += item.price * cartItem.amount;
            }
        });
        return totalPrice
    }
    return (
        <div className="content p-20 d-flex justify-between">
            <h3 className="contentHeader mb-10">Корзина</h3>
            <div className="mainContent d-flex justify-between">
                <div className="cartItems d-flex flex-column">
                    {cartItems.map(cartItem => items.map(category => category.items.map(item =>
                        item.id === cartItem.id &&
                        (<CartCard
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            id={item.id}
                            key={item.id}
                            initialAmount={cartItem.amount}
                        />)
                    )))}
                </div>
                <CartButton onClick={()=>setCartItems([])} totalPrice={countTotalPrice()}/>
            </div>
        </div>
    );
};

export default Cart;
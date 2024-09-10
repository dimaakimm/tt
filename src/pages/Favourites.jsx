import React, {useContext} from 'react';
import ItemCard from "../components/ItemCard/ItemCard";
import {FavouritesCartContext} from "../context/context";

const Favourites = () => {
    const {favourites, items} = useContext(FavouritesCartContext)
    return (
        <div className="content p-20 d-flex justify-between flex-column">
            <h3 className="contentHeader mb-10">Ваше избранное</h3>
            <div className="items d-flex flex-wrap ">
                {favourites.map(favouriteId => items.map(category => category.items.map(item =>
                    item.id === favouriteId &&
                        (<ItemCard
                            title={item.title}
                            img={item.img}
                            rate={item.rate}
                            price={item.price}
                            id={item.id}
                            key={item.id}
                        />)

                )))}
            </div>

        </div>
    );
};

export default Favourites;
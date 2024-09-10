import React, {useContext} from 'react';
import ItemCard from "../components/ItemCard/ItemCard";
import {FavouritesCartContext} from "../context/context";


const Home = () => {
    console.log('home')
    const {items} = useContext(FavouritesCartContext)
    return (
        <div className="content p-20 d-flex justify-between flex-column">
            {items.map(category =>
                <div className="category mb-20">
                    <h3 className="categoryTitle mb-10">{category.categoryTitle}</h3>
                    <div className="items d-flex flex-wrap ">
                        {category.items.map((item) =>
                            <ItemCard
                                title={item.title}
                                img={item.img}
                                rate={item.rate}
                                price={item.price}
                                id={item.id}
                                key={item.id}
                            />)}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Home;
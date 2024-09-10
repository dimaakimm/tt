import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./AppRouter/AppRouter";
import {FavouritesCartContext} from "./context/context";
import {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";
import {dataCartItems, dataFavourites, dataItems} from "./data/items";

function App() {
    const [cartItems, setCartItems] = useState(dataCartItems)
    const [items, setItems] = useState(dataItems)
    const [favourites, setFavourites] = useState(dataFavourites)
  return (
      <FavouritesCartContext.Provider
          value={{
              cartItems,
              setCartItems,
              items,
              setItems,
              favourites,
              setFavourites,
          }}>
          <BrowserRouter>
              <Header />
              <AppRouter />
              <Footer />
          </BrowserRouter>
      </FavouritesCartContext.Provider>
  );
}

export default App;

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";

export const routes = [
    {path: '/main', element: Home, exact: true},
    {path: '/cart', element: Cart, exact: true},
    {path: '/favourites', element: Favourites, exact: true},
]
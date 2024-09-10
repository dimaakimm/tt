import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes/routes";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    element={<route.element/>}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Route path='*' element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;
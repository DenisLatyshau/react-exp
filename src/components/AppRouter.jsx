import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? 
            <Routes>
            {privateRoutes.map(route => 
                <Route 
                    key={route.path}
                    element={<route.element />} 
                    path={route.path}
                />
            )}
            </Routes>
            : 
            <Routes>
            {publicRoutes.map(route => 
                <Route 
                    key={route.path}
                    element={<route.element />} 
                    path={route.path}
                />
            )}
            </Routes>
    )
}

export default AppRouter
import React, {useContext} from "react";

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";

import { AuthProvider, AuthContext } from "./pages/contexts/auth";


const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/product" />
        }

        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<Private><HomePage/></Private>} />
                    <Route exact path="/product" element={<ProductPage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
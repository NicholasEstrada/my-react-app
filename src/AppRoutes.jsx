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
import Catalogo from './pages/Catalogo';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

import { AuthProvider, AuthContext } from "./pages/contexts/auth";


const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/" />
        }

        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<ProductPage/>} />
                    <Route exact path="/Home" element={<Private><HomePage/></Private>} />
                    <Route exact path="/Catalogo" element={<Catalogo/>} />
                    <Route exact path="/Blog" element={<Blog/>} />
                    <Route exact path="/Contato" element={<Contato/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
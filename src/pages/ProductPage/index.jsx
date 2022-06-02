import React from "react";

import {Link} from "react-router-dom";

const ProductPage = () => {

    return(
        <div className="container">
        <h1>Product</h1>
        <p>funciona</p>
        <h1>
        <label htmlFor="esse">em fase de producao</label>
        </h1>
        <Link to="/login">Login</Link>
        </div>
    )
}

export default ProductPage;
import React from "react";

import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const TITLE = 'Nicholas Serviços';

const ProductPage = () => {
    return (
        <div className="main">

            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

        <nav className="bar navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://nicholastrada.ga">
                        <img src="/imagens/casa.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-link"> <a className="nav-item" href="#"><Link to="/catalogo">Catálogo</Link></a></li>
                        <li className="nav-link"> <a className="nav-item" href="#"><Link to="/blog">Blog</Link></a></li>
                        <li className="nav-link"> <a className="nav-item" href="#"><Link to="/contato">Contato</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
                

            <div className="conteudo">
                    <div className="texto-principal">
                        <p>Descrição de alguns serviços ofertados</p>
                    </div>


                    <div className="container">
                        
                    </div>

                    <div className="row justify-content-center p-5">
                        
                        <div className="container">
                            <h4 id="texto">Ver disponibilidade de horários</h4>
                        </div>
                        
                    </div>
            </div>


            <footer className="align-self-end">
                <p>Copyright 2023 © - Nicholas Estrada</p>
            </footer>

        </div>
    )
}

export default ProductPage;
import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const TITLE = 'Blog';

const Blog = () => {    //const { authenticated, login } = useContext
    //    (AuthContext)

    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //const [check, setCheck] = useState("");

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    console.log("submit", { email, password, check });

    //    login(email, password, check)
    //}

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
                        <p>Conhecimentos gerais</p>
                    </div>


                    <div className="container">
                        <a href="https://getbootstrap.com/docs/5.3/helpers/stretched-link/">criar</a>
                    </div>

                    <div className="row justify-content-center p-5">
                    <div class="card">
  

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>

                            
                        </div>
                </div>

                <div className="texto-rodape align-self-end">
                <div className="container">
                    <h4 id="texto"><Link to="/contato">Ver disponibilidade de horários</Link>
                    <img vspace="5" hspace="5" width="13" height="13" src="/imagens/sair-do-canto-superior-direito.png" alt="Sair para o Link" /></h4>
                </div>
            </div>
            <footer className="align-self-end">
                <p>Copyright 2023 © - Nicholas Estrada</p>
            </footer>

        </div>
    );
};

export default Blog;
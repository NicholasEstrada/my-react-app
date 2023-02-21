import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const TITLE = 'Catálogo';

const Catalogo = () => {    //const { authenticated, login } = useContext
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
                        <p>Descrição de alguns serviços ofertados</p>
                    </div>


                    <div className="container mt-4">
                        <div className="row">
                            <div className="servico col-sm-5 col-md-6 border border-white">
                                <h5 className="titulo-servico border-bottom">Consultoria</h5>
                                <p>Informática, serviços de software, computadores e máquinas</p>
                                <img className="float-end mb-2" src="/imagens/servicos-de-consultoria.png" alt="" width="40" height="40" />
                            </div>
                            <div className="servico col-sm-5 col-md-6 border border-white">
                                <h5 className="titulo-servico border-bottom">Formatar</h5>
                                <p>Computadores, notebooks e celulares</p>
                                <img className="float-end mb-2" src="/imagens/smartphone.png" alt="" width="40" height="40" />
                            </div>
                            <div className="servico col-sm-5 col-md-6 border border-white">
                                <h5 className="titulo-servico border-bottom">Aprimoramento</h5>
                                <p>Consulta de upgrade de hardware e computadores, notebooks e celulares</p>
                                <img className="float-end mb-2" src="/imagens/update.png" alt="" width="40" height="40" />
                            </div>
                            <div className="servico col-sm-5 col-md-6 border border-white">
                                <h5 className="titulo-servico border-bottom">Instalar equipamentos de rede e bluetooth</h5>
                                <p>Realizar instalação de impressoras, repetidores de Wi-Fi, câmeras, lâmpadas Wi-Fi...</p>
                                <img className="float-end mb-2" src="/imagens/rede.png" alt="" width="40" height="40" />
                            </div>
                            <div className="servico col-sm-5 col-md-6 border border-white">
                                <h5 className="titulo-servico border-bottom">Procurações</h5>
                                <p>Configuração Java para fazer procurações</p>
                                <img className="float-end mb-2" src="/imagens/java.png" alt="" width="40" height="40" />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center p-5">
                        <div className="container">
                            
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

export default Catalogo;
import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/auth";
import { Link } from "react-router-dom";

const Contato = () => {
    //const { authenticated, login } = useContext
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
                        <p>Como você prefere falar com a gente?</p>
                    </div>
                    <div className="contatos">
                        <div className="info-contatos">
                            <h4>Telefone</h4>
                            <a href="tel:+5547996939496" target={"_blank"}>(47)9.9693-9496</a>
                        </div>
                        <div className="info-contatos">
                            <h4>E-mail </h4>
                            <a href="mailto:nicholastrada@gmail.com" target={"_blank"}>nicholastrada@gmail.com</a>
                        </div>
                        <div className="info-contatos">
                            <h4>WhatsApp </h4>
                            <a href="https://wa.me/5547996939496" target={"_blank"}>
                            <img src="/imagens/whatsapp.png" alt="" width="30" height="30" class=""/>
                            </a>
                        </div>
                    </div>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=WEEK&src=NmhvbTFxc3A2MzU5MHRnbjdoYjhkaGtyZThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548" ></iframe>
            </div>


            <footer>
                <p>Copyright 2023 © - Nicholas Estrada</p>
            </footer>

        </div>
    );
};

export default Contato;
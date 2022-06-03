import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/auth";

import "./styles.css";

const LoginPage = () => {
    const { authenticated, login } = useContext
        (AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password, check });

        login(email, password, check)
    }

    return (
        <div id="login" >
            <h1 className="title">Login do Sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field" class="mb-3">
                    <label htmlFor="email" for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" class="form-text">Digite seu email que já foi cadastrado</div>
                </div>
                <div className="field" class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" htmlFor="password">Senha</label>
                    <input class="form-control" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field" class="mb-3 form-check">
                    <input htmlFor="check" type="checkbox" class="form-check-input" id="check" value="1" onChange={(e) => setCheck(e.target.value)} />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="actions">
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
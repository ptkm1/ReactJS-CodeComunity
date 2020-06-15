import React from 'react';
import './style.css';
import vector1 from '../../media/VetorCadastro.svg';
import logo from '../../media/logo.svg';
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

export default function Login(){

return(
<>
<div className="container">

    <div className="voltar">
        <Link className="link" to="/">
            <BsArrowLeft size={21} color="white" /> <h4>Voltar</h4>
        </Link>
        
    </div>

    <div className="areaCadastro">      
    <img src={logo} alt="Logo" />
        <form>
            <div className="inputTotal">
                <h3>Nome de usuário</h3>
                <input type="text" placeholder="Escolha um nome de usuário" />
            </div>
            <div className="inputTotal">
                <h3>Email</h3>
                <input type="email" placeholder="Escolha um nome de usuário" />
            </div>
            <div className="inputTotal">
                <h3>Senha</h3>
                <input type="password" placeholder="Escolha um nome de usuário" />
            </div>
            <div className="inputTotal">
                <h3>Cidade</h3>
                <input type="text" placeholder="Escolha um nome de usuário" />
            </div>
            <div className="inputTotal">
                <h3>Skills</h3>
                <input type="text" placeholder="Escolha um nome de usuário" />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>

    <div className="vetorCadastro">
    <div className="informacao">
        <h1>Crie uma conta agora mesmo!</h1>
        <h3>Grátis e Rápido</h3>
        <p>Para ter acesso à uma comunidade de profissionais e interessados em projetos. <br></br> Mas calma! Se você não é profissional e quer apenas aprender algo, garanto q as comunidades te ajudarão!</p>
    </div>
        <img src={vector1} alt="vetor" />
    </div>


        
   
</div>    
</>
);

}

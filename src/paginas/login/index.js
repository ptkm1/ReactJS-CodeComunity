import React from 'react';
import './style.css';
import vector from '../../media/Vetor.png';
import logo from '../../media/logo.svg';
import { Link } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import { BsPersonPlusFill } from "react-icons/bs";

export default function Login(){

return(
<>
<div className="container">
    <div className="esquerda">
            <img src={vector} alt="Vetor"/>

            <div className="esquerdaInfo">
            <h1>Vamos começar?</h1>
            <h2>Seja bem vindo à CC!</h2>
            <p>Code Comunity é uma plataforma feita para estudantes e profissionais de áreas correlatas a TI, seja você designer, desenvolvedor, gestor ou até mesmo investidor.</p>
            </div>        
    </div>

<div className="direita">
    <img src={logo} alt="Logo" />



        <div>
        <form className="loginArea">
            <div className="inputTotal">
                <h3>Email</h3>
                <input type="email" placeholder="Digite o seu email" />
            </div>

            <div className="inputDividido">
                <h3>Senha</h3>
                <div className="inputebutton">
                <input type="password" placeholder="Digite a sua senha" />
                <button type="submit"> <FiCoffee size={15} color="white" />  </button>
                <Link to="/home">Logar</Link>
                </div>
                
                
            </div>
            

        </form>
        </div>
        

        <Link className="cadastrar" to="/cadastro">
        <h4>Criar uma conta <BsPersonPlusFill size={15} color="#6272a4" /></h4>
        </Link>
</div>
            
          
        
            

        

</div>
    
</>
);

}

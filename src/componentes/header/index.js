import React from 'react';
import './style.css';

import logo from '../../media/logo.svg';
import { Link } from "react-router-dom";
import vector from '../../media/Vetor.png';

import { BsQuestionCircle, BsGear, BsHouseDoor, BsChat, BsPersonFill, BsBoxArrowRight } from "react-icons/bs";

//<img src={vector} alt="vetor" />


export default function Header(){

return(
    <div className="header">
      <div className="usuario">
      <BsPersonFill color="#FFF" />
      </div>

      <div className="options">
        <ul>
          <Link className="link" to="/"><BsBoxArrowRight /> </Link>
          <Link className="link" to="/"><BsHouseDoor /> </Link> 
          <Link className="link" to="/"><BsGear /></Link>
          <Link className="link" to="/"><BsChat /></Link>
          
        </ul>
      </div>
      <div className="bottomOption">
      <BsQuestionCircle />
      </div>

    </div>
  );

}

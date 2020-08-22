import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Flatlist } from 'react-dom';
import './style.css';
import logo from '../../media/logo.svg';
import { Link } from "react-router-dom";
import Header from "../../componentes/header";


export default function Home(){

    let message = "Olá me chamo hello world e nao sei o que dizer, teste de texto"
    let message2 = "Olá me chamo hello world e nao sei o que dizer teste, teste"
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          text: 'LoremIpsum teste',
          user: {
                  nome: 'Patrick',
              }
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          text: message2,
          user: {
                  nome: 'Patrick',
              }
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          text: message,
          user: {
                  nome: 'Patrick',
              }
        },
        {
            title: '4 item',
            text: message,
            user: {
                  nome: 'Patrick',
              }
        },
        {
            title: '4 item',
            text: message,
            user: {
                  nome: 'Patrick',
              }
        }
      ];
      
      const comunity = [
          {
              titulo: "Codigos",
             
          },
          {
              titulo: "Designer",
           
          },
          {
              titulo: "DevOps",
            
          },
          {
              titulo: "Empregos",
            
          },
          {
              titulo: "Banco de dados",
            
          },
          {
              titulo: "Mobile",
              
          }
      ]



    return(
        <>
    <Header />

    <div className="homeContainer">
        <div className="cardsTitle"> <h3>Ultimos tópicos acessados</h3> </div>
            <div className="latest">    
                {
                    DATA.slice(0, 4).map(resp =>(

                        
                        <div className="bloco">
                            <h1>{resp.title}</h1>
                        </div>
                        
                    ))                 
                }
            </div>


    <div className="bottom">
        <div className="div">
        <div className="feedTitle"> <h3>Feed</h3> </div>
            <div className="feed">
            

            { DATA.map(resp =>(
                <div className="feedBloco">
                    <div className="user">
                        <div className="avatar"></div>
                        <h2>{resp.user.nome}</h2>
                    </div>
                    <h3>{resp.title}</h3>
                    <p>{resp.text.toString()}</p>
                </div>
            )) }

            </div>    
        </div>

        <div className="div1">
        <div className="comuniTitle"> <h3>Comunidades</h3> </div>
                <div className="comuniButtons">
                 {
                     comunity.map(resp => (
                         <Link to="/">
                             <h3 className="botoes" >{resp.titulo}</h3>
                         </Link>
                        
                     ))
                 }


                </div>

            </div>
        </div>


    </div>
        </>
    );

}

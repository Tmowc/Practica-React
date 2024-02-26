import React from 'react'
import '../Estilos/EstrenosCine.css'
import { BotonTrailers } from './BotonTrailers';


//importando imagenes
import Falcon from '../assets/estreni1.webp';
import Wall from '../assets/estreno2.webp';

export const EstrenosCine = ( {oculto,  tituloSeccion, imagen, tituloPelicula, genero, direccion1, direccion2, reparto, sinompsis } ) => {
  return (
    <>
       {oculto && 
        <div> 
        <h2 className="h2 text-center mb-4">{tituloSeccion && 'Estrenos'}</h2> 
          
                                
              <div className="caja-estrenos">
                  <div className="imagen-container">
                      <img className="img-fluid" src={imagen? Falcon : Wall} alt="Imagen poster de presentación de la película estreno Falcon Lake"/>
                  </div>
 
                  <div>
                          <div className="nombres-estreno">
                              <p className="fs-4 fw-bold">{tituloPelicula}</p>
                              <p className="fs-7"> {genero}</p>
                          </div>
                          <div className="datos">
                              <p className="fs-5" >{direccion1} <a href="">{direccion2}</a></p>
                              <p className="fs-6" >{reparto}</p>
                          </div>
                              
                          
                          <div className="sinompsis-estreno">
                              <p className="fs-6">{sinompsis}</p>
                          </div>   
                           <BotonTrailers/>
                  </div>
                 
                  
                  
               </div>
        </div>
       } 
       
       
    </>
  )
}

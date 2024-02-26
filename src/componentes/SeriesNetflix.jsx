import React from 'react'
import '../Estilos/SeriesNetflix.css';
import { BotonTrailers } from './BotonTrailers';
//importando imagenes
import Kominsky from '../assets/kominsky.webp';
import Cocinera from '../assets/la-cocinera-de-castamar.webp';

export const SeriesNetflix = ( { oculto,  tituloSeccion, imagenSerie, tituloSerie, genero, direccion1, direccion2, reparto, sinompsis }) => {
  return (
    <>
        {oculto && 
        <div> 
        <h2 className="h2 text-center mb-4">{tituloSeccion && 'Series'}</h2> 
          
                                
              <div className="caja-estrenos">
                  <div className="imagen-container">
                      <img className="img-fluid" src={imagenSerie?  Kominsky : Cocinera} alt="Imagen poster de presentación de la serie El método Kominsky"/>
                  </div>
 
                  <div>
                          <div>
                              <p className="fs-4 fw-bold">{tituloSerie}</p>
                              <p className="fs-7"> {genero}</p>
                          </div>
                          <div className="datos">
                              <p className="fs-5" >{direccion1} <a href="">{direccion2}</a></p>
                              <p className="fs-6" >{reparto}</p>
                          </div>
                              
                          
                          <div>
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

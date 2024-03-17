import React from 'react'
import { BotonTrailers } from './BotonTrailers';
import Loki from '../assets/loki.webp';
import Moon from '../assets/Moon_Knight.webp';


export const SeriesDisney = ( { oculto,  tituloSeccion, imagenSerie, tituloSerie, genero, direccion1, direccion2, reparto, sinompsis } ) => {
  return (
    <>
            {oculto && 
        <div> 
        <h2 className="h2 text-center mb-4">{tituloSeccion && 'Series'}</h2> 
          
                                
              <div className="caja-estrenos">
                  <div className="imagen-container">
                      <img className="img-fluid" src={imagenSerie?  Loki : Moon} alt="Imagen poster de presentación de la serie Loki"/>
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

import React from 'react'
import './Estilos/CabeceraSuscribir.css';
//importando imagenes para el header de la suscripcion
import Cinemania1 from './assets/cinemania1.webp';


export const HeaderSuscribirse = () => {
  return (
    <>
        <div className='container-fluid  '>
                {/* <div className="row justify-content-center align-items-center w-100 h-auto">*/}

                  <div className = 'contenedor-principal-header container-fluid fixed-top text-center pt-5 '>
                        
                        <header className="row justify-content-center   mt-4 pb-3">                     
                            <div className='encabezado-suscribir d-flex  align-items-center'>
                                <h2>SUSCRÍBETE</h2>
                                <div><p>ÚNETE AL MUNDO CLICMOVIE</p></div>
                                <div>
                                  <img src={Cinemania1} alt="imagen revista cinemania" />
                                </div>        
                            </div>
                
                        </header>
                  </div>
        </div>
    </>
  )
}

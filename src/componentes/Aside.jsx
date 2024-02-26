import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/Aside.css';

//importando imagenes:
import Fundadores from '../assets/toy-story-woody-buzz-1548926608.webp'
import Max from '../assets/maxresdefault.webp'
import Moderne from '../assets/CinemaModerne_PBerra_-5.webp'


export const Aside = () => {
  return (
   <>
          <div>
              <div className="fundadores-container px-3 py-3">
                    <h3>Nuestro Equipo</h3>
                    <p className="fs-7 my-0">Woody & Buzz - Co-Fundadores</p>
              </div>
                            
              <img className="img-fluid fundadores" src={Fundadores} alt="Imagen de de woody y buzz de la película Toy Story"/>
          </div>
                
          <div class="d-flex buscar" >
              <input className="form-control p-2 mt-2 fs-8" type="search" placeholder="Dinos qué buscas" aria-label="Search"/>
              <button className="btn p-2 rounded mt-2 fs-8 boton-buscar " type="submit">Buscar</button>
          </div>
    
            <div className="archivos-container mb-5">
                  <h4 class="mb-4 mt-5 fs-4">Lo más visto</h4>
                    <ol className="list-group list-group-numbered fs-6  lh-lg">
                        <a className="list-group-item text-decoration-none text-primary"  href="">10 grandes películas en blanco y negro</a>
                        <a className="list-group-item text-decoration-none text-primary" href="">Cine documental</a>
                        <a className="list-group-item text-decoration-none text-primary" href="">Cine europeo</a>
                        <a className="list-group-item text-decoration-none text-primary" href="">Cine latinoamericano</a>
                        <a className="list-group-item text-decoration-none text-primary" href="">Hollywood de la A a la Z</a>
                        <a className="list-group-item text-decoration-none text-primary" href="">El papel de la radio en la actualidad </a>
                        <a className="list-group-item text-decoration-none text-primary" href="">Programas míticos de la radio argentina</a>
                    </ol>
            </div>
                        
              <div className="mt-4 mb-4 p-3 rounded patrocinadores">
                    <h4 className="mb-4 fs-4">Patrocinadores</h4>
                      <a href="https://www.youtube.com/watch?v=RJSzo1AfBuo"><img className="rounded-2 img-fluid" src={Max} alt="Imagen de publicidad sobre SEO"/></a>
                      <a href="https://www.cinemamoderne.com/"><img className="img-fluid rounded-3 mt-5" src={Moderne} alt="Imagen de la sala de cinema moderno"/></a>
              </div> 
        
   </>
  )
}

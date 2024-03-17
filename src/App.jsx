import { React, useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { BotonInicio } from './componentes/BotonInicio';
import { BotonSuscribirse } from './componentes/BotonSuscribirse';

import Logo from './assets/logoClicMovie.png';
import { Portada } from './componentes/Portada';
import { EstrenosCine } from './componentes/EstrenosCine';
import { SeriesNetflix }  from './componentes/SeriesNetflix';
import { SeriesDisney } from './componentes/SeriesDisney';
import { Aside } from './componentes/Aside';
import { Footer } from './componentes/Footer';
import { Fragment } from 'react';

   
function App () {
  //Hooks PARA ABRIR Y CERRAR LOS DROPDOWNS DE LOS DESPLEGABLES:

  //estado para el desplegable TEMATICAS
  const [dropdownTematicas, setDropdownTematicas] = useState(false);

  const abrirCerrarDropdownTematicas =()=>{
    setDropdownTematicas(!dropdownTematicas);
  };

  //estado para el desplegable NETFLIX
  const [dropdownNetflix, setDropdownNetflix] = useState(false);

  const abrirCerrarDropdownNetflix =()=>{
    setDropdownNetflix(!dropdownNetflix);
  };

  ////estado para el desplegable Disney+
  const [dropdownDisney, setDropdownDisney] = useState(false);

  const abrirCerrarDropdownDisney =()=>{
    setDropdownDisney(!dropdownDisney);
  };


  //ESTADO DE VISIBILIDAD DEL CONTENIDO DE LA PORTADA
  const [visiblePortada, setVisiblePortada] = useState(true);

  //Hook useState() para amnejar el estado del contenido de las 
  const [ocultoEstrenosTematica, setOcultoEstrenosTematica] = useState(false)
  //Generando el método que me permite cambiar la portada por el contenido del item "Accion 3"
  const handleClickCambiar=()=>{
    setVisiblePortada(false);
    setOcultoEstrenosTematica(true);
    setOcultoSeriesNetflix(false); 
    setOcultoSeriesDisney(false); 
  };

  //Hook useState() para amnejar el ESTADO de VISIBILIDAD del contenido de las series de NETFLIX
  const [ocultoSeriesNetflix, setOcultoSeriesNetflix] = useState(false)
  const handleClickSeriesNetflix=()=>{
    setVisiblePortada(false);
    setOcultoSeriesNetflix(true);
    setOcultoSeriesDisney(false);
    setOcultoEstrenosTematica(false);
  };

//Hook useState() para amnejar el ESTADO de VISIBILIDAD del contenido de las series de NETFLIX
const [ocultoSeriesDisney, setOcultoSeriesDisney] = useState(false)
const handleClickSeriesDisney=()=>{
  setVisiblePortada(false);
  setOcultoSeriesNetflix(false);
  setOcultoEstrenosTematica(false);
  setOcultoSeriesDisney(true);
};


  return (
    <Fragment>
        <div className='container-fluid  '>
          {/* <div className="row justify-content-center align-items-center w-100 h-auto">*/}

            <div className = 'contenedor-principal-header container-fluid fixed-top text-center pt-5 '>
                  <div className = 'contenedor-encabezado mb-2 '>
                        <div className = 'contenedor-logo-titulo d-flex justify-content-center align-items-center'>
                          <img
                              className = 'logo'
                              src = {Logo}
                              alt = 'Logo de clic movie' />

                          <h1 className = 'titulo-principal'>ClicMovie</h1>
                        </div>
                        <p className = 'parrafo-cabecera mt-2 '>Navegando los mares del séptimo arte.</p>
                  </div>

                  <header className="row justify-content-center   mt-4 pb-3">
                                              {/*Barra de navegacion*/}
                                        <div className="row justify-content-center   mt-4">
                                          <div className="col-lg-4">
                                                  {/* d-md-block visible a partir de 768px */}
                                                <nav className="navbar navbar-expand-lg navbar-dark d-none d-xs-none  d-md-block">

                                                    <div className="container-fluid justify-content-center">   

                                                        <BotonInicio
                                                          enlaceInicio = {<a href="./index.html">Inicio</a>} />

                                                        <Dropdown isOpen = {dropdownTematicas} toggle = {abrirCerrarDropdownTematicas} size = 'lg'>
                                                            <DropdownToggle caret className='fs-6 mx-4 boton'>
                                                                Temáticas
                                                            </DropdownToggle>

                                                            <DropdownMenu>
                                                            <DropdownItem ><h6 className="fs-6 mt-2 fw-bold colorFuente">Cine</h6></DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem onClick = {()=> handleClickCambiar()} className='fs-6 colorFuente'>Estrenos</DropdownItem>
                                                            <DropdownItem className='fs-6 colorFuente'>Crítica</DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem ><h6 className="fs-6 mt-2 fw-bold colorFuente">Televisión</h6></DropdownItem>
                                                            <DropdownItem  className='fs-6 colorFuente'>Lo último</DropdownItem>
                                                            <DropdownItem className='fs-6 colorFuente' >Clásicos de la TV</DropdownItem>
                                                            
                                                            </DropdownMenu>

                                                        </Dropdown>

                                                        <Dropdown isOpen = {dropdownNetflix} toggle = {abrirCerrarDropdownNetflix} size = 'lg'>
                                                            <DropdownToggle caret className='boton fs-6 mx-4'>
                                                                Netflix
                                                            </DropdownToggle>

                                                            <DropdownMenu>
                                                                <DropdownItem onClick = {()=>handleClickSeriesNetflix()} className='fs-6 colorFuente'>Series</DropdownItem>
                                                                <DropdownItem className="fs-6 colorFuente"> Películas</DropdownItem>
                                                                <DropdownItem onClick = {()=>accion1()} className='fs-6 colorFuente'>Estrenos</DropdownItem>
                                                            </DropdownMenu>

                                                        </Dropdown>        

                                                        <Dropdown isOpen = {dropdownDisney} toggle = {abrirCerrarDropdownDisney} size = 'lg'>
                                                            <DropdownToggle caret className='boton fs-6 mx-4'>
                                                                Disney+
                                                            </DropdownToggle>

                                                            <DropdownMenu>
                                                                <DropdownItem onClick = {()=>handleClickSeriesDisney()} className='fs-6 colorFuente'>Series</DropdownItem>
                                                                <DropdownItem className="fs-6 colorFuente"> Películas</DropdownItem>
                                                                <DropdownItem onClick = {()=>accion1()} className='fs-6 colorFuente'>Estrenos</DropdownItem>
                                                            </DropdownMenu>

                                                        </Dropdown>  
                                                        
                                                        <BotonSuscribirse
                                                        
                                                        /> 

                                                          


                                                  </div>    

                                                                           
                                              </nav>
                                          </div>
                                    </div>
                                    </header>
            </div>
          
                <main className=" row justify-content-center  d-flex">
                    <div className='col-lg-7 col-xl-7 col-xxl-7 d-md-block '>
                        <div className='d-flex w-100 h-auto'>
                             <section className='mx-5 w-75'>
                                <Portada
                                visible = {visiblePortada} />

                                <EstrenosCine
                                oculto = {ocultoEstrenosTematica} 
                                tituloSeccion = {true}
                                imagen = {true}
                                tituloPelicula = 'Título: Wonka'
                                genero = 'Musical. Aventuras. Fantástico. Comedia | Cine familiar. Precuela'
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Paul King'
                                reparto = 'Reparto: Timothée Chalamet, Hugh Grant, Rowan Atkinson, Rowan Atkinson, Calah Lane, Keegan-Michael, Tom Davis, Sally Hawkins.'
                                sinompsis = 'Basada en el personaje que protagoniza Charlie y la fábrica de chocolate, el libro infantil más emblemático de Roald Dahl y uno de los más vendidos de todos los tiempos, Wonka cuenta la historia de cómo el mayor inventor, mago y chocolatero del mundo se convirtió en el querido Willy Wonka que conocemos hoy en día, centrándose en su juventud y en cómo conoció a un Oompa-Loompa en una de sus primeras aventuras.'
                                />

                                <EstrenosCine
                                oculto = {ocultoEstrenosTematica} 
                                imagen = {false}                                    
                                tituloPelicula = 'Título: Golpe a Wall Street'
                                genero = '6 de octubre de 2023 / Drama, Comedia'
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Craig Gillespie'
                                reparto = 'Reparto: Seth Rogen, Sebastian Stan, Paul Dano.'
                                sinompsis = 'La historia se basa en el caso Gamestop, que generó un terremoto en Wall Street en 2021. En enero de ese mismo año, el mercado sufrió un estrangulamiento a manos de la empresa de video juegos Gamestop, provocando importantes pérdidas financieras entre los accionistas y la caída de uno de los mayores fondos de alto riesgo'
                                />

                                <SeriesNetflix
                                oculto = {ocultoSeriesNetflix} 
                                tituloSeccion = {true}
                                imagenSerie = {true}
                                tituloSerie = 'Título: El Método Kominsky'
                                genero = '2018 / Comedia'
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Chuck Lorre, Andy Tennant, Donald Petrie, Beth McCarthy-Miller'
                                reparto = 'Reparto: Michael Douglas, Alan Arkin, Nancy Travis y Sarah Baker.'
                                sinompsis = 'Sandy Kominsky y Norman Newlander no son de esos abuelitos que viven del pasado, pero tampoco tienen todo el futuro por delante. Por suerte, el humor no envejece.'
                                />

                                <SeriesNetflix
                                oculto = {ocultoSeriesNetflix} 
                                imagenSerie = {false}
                                tituloSerie = 'Título: La Cocinera de Castamar'
                                genero = 'Serie de TV. Drama | Siglo XVIII. Drama de época'
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Tatiana Rodríguez (Creadora), Iñaki Peñafiel, Norberto López Amado'
                                reparto = 'Reparto: Michelle Jenner, Roberto Enríquez y Hugo Silva.'
                                sinompsis = '12 episodios. Adaptación de la novela homónima de Fernando J. Múñez, ambientada en el Madrid del siglo XVIII. La joven Clara Belmonte (Michelle Jenner) comienza a cocinar para Diego (Roberto Enríquez), Duque de Castamar. Esto cambiará la vida de ambos, que tendrán que luchar contra uno de los grandes obstáculos de la época para estar juntos: la diferencia de clases, además de hacer frente a la sed de venganza de Enrique de Arcona (Hugo Silva).'
                                />

                                <SeriesDisney
                                oculto = {ocultoSeriesDisney} 
                                tituloSeccion = {true}
                                imagenSerie = {true}
                                tituloSerie = 'Título: Loki (2021)'
                                genero = 'Serie de TV. Ciencia ficción. Fantástico. Aventuras. Acción | Viajes en el tiempo. Cómic. Marvel Comics. MCU. Spin-off'
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Michael Waldron (Creador), Kate Herron, Justin Benson, Aaron Moorhead'
                                reparto = 'Reparto: Tom Hiddleston, Sophia Di Martino, Wunmi Mosaku.'
                                sinompsis = 'Se cometieron errores al final de los tiempos y el MCU se convirtió en un multiverso… Bueno: esto es lo que pasó en el final de la temporada 1 de Loki. La temporada 2 lo encuentra a él (Tom Hiddleston) en una TVA muy cambiada que ahora parece estar dedicada a Kang (Jonathan Majors). Incluso el primer amigo verdadero de Loki, Mobius M. Mobius (Owen Wilson), ya no sabe quién es. Lo más alarmante es que el propio Loki parece despegarse en el tiempo mientras desaparece y reaparece a intervalos aleatorios. La temporada 2 presenta a Ke Huy Quan como Ouroboros, el hombre que inventó la tecnología de viaje en el tiempo de TVA. Pero es posible que ni siquiera él pueda ayudar a Loki a encontrar su variante femenina, Sylvie (Sophia Di Martino), de quien Loki se enamoró la temporada pasada.'
                                />

                                <SeriesDisney
                                oculto = {ocultoSeriesDisney} 
                                imagenSerie = {false}
                                tituloSerie = 'Título: Moon Knight'
                                genero = 'Serie de TV. Fantástico. Acción. Aventuras | Thriller psicológico. Antiguo Egipto. Superhéroes. Marvel Comics. Cómic. MCU. Miniserie de TV '
                                direccion1 = 'Dirigida por'
                                direccion2 = 'Jeremy Slater (Creador), Mohamed Diab, Justin Benson, Aaron Moorhead.'
                            
                                reparto = 'Reparto: .'
                                sinompsis = 'Serie (2022). 6 episodios. Un trabajador de un museo que lucha contra un trastorno de identidad disociativo, recibe los poderes de un dios egipcio de la luna. Pronto descubre que estos poderes pueden ser tanto una bendición como una maldición.'
                                />






                            </section>

                            <aside className='w-25'>
                              <Aside/>
                            </aside>   

                        </div>
                        
                    </div>
               </main> 

               <footer className='row justify-content-center'>
                <Footer />
               </footer>
            
            
              
              
          </div>



        {/* </div>*/}
      
    
    
    
    </Fragment>
    

  )
}

export default App;


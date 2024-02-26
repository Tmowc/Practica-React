import '../Estilos/Portada.css';

//importando imagenes:
import Artificial from '../assets/IA.webp'
import LindaHamilton from '../assets/linda hamilton.webp'
import freddy from '../assets/freddy-1.webp'
import OP from '../assets/OIP.webp'

export const Portada = ( {visible} ) => {
  return (
    <>
        {visible && <div>
          <h2 className='text-center'>Destacados de la semana</h2>
            <div className="destacado-semana">
                   

                                     <div className=" mt-4 card1">
                                         <a className="text-decoration-none" href=""><h3 className="text-center">Inteligencia Artificial</h3></a>
                                         <p className="text-center fs-7">Una entidad artificial se descubre como autoconsciente y buscará, hasta el final, la clave para convertirse en humano.</p>
                                         <a href=""><img src={Artificial} alt="Imagen de Linda Hamilton" className="img-fluid" /></a>
                                     </div>
    
                                     <div className=" mt-4 card2">
                                         <a className="text-decoration-none" href=""><h3 className="text-center">¿Qué fue de Linda Hamilton..?</h3></a>
                                         <p className="fs-7 text-center">Recordamos a la actriz del mítico personaje Sarah Connor.</p>
                                         <a href=""><img src={LindaHamilton} alt="Imagen de Linda Hamilton" className="img-fluid" /></a>
                                     </div>
                                     <div className=" mt-4  card3">
                                         <a className="text-decoration-none" href=""><h3 className="text-center">¡Halloween!</h3></a>
                                         <p className="fs-7 text-center">Una lista con los clásicos del género de terror.</p>
                                         <a href=""><img src={freddy} alt="Imagen de Freddy Krueger" className="img-fluid"/></a>
                                     </div>
    
                                     <div className="mt-4  card4">
                                         <a className="text-decoration-none" href=""><h3 class="text-center">¡Dele gas a la risa!</h3></a>
                                         <p className="fs-7 text-center">Una recorrida por los vaivenes de la decadencia argentina a través de esta sátira inolvidable.</p>
                                         <a href=""><img src={OP} alt="Imagen de una escena de la película argentina esperando la carroza" className="img-fluid"/></a>
                                     </div>
            </div>

    </div>}
    </>      
  )
}

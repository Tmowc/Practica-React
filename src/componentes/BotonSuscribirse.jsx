import React from 'react'
import '../Estilos/BotonInicio.css'

export const BotonSuscribirse = ( {mostrar} ) => {
  return (
    <button type='button' onClick={mostrar} className='inicio btn mx-4 px-4'>Suscribirse</button>
  )
}

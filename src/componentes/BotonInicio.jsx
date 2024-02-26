import React from 'react'
import '../Estilos/BotonInicio.css'

export const BotonInicio = ( {enlaceInicio} ) => {
  return (
    <button type="button" className="inicio btn mx-4 px-4 ">
            {enlaceInicio}
    </button>
  )
}

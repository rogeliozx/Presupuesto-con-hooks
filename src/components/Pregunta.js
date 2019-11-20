import React, { Fragment,useState } from "react";
import Error from './Error';

function Pregunta(props) {
    const {guardarPresupuesto,guardarPregunta,guardarRestante}=props;
    const [cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);


    const agregarPresupuesto=e=>{
        e.preventDefault();
        if (cantidad<=0||isNaN(cantidad) ||cantidad===null) {
            guardarError(true);
            return;
        }
        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPregunta(false);
    }
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error? <Error mensaje='El presupuesto es incorrecto'/>:null}
      <form
      onSubmit={agregarPresupuesto}
      >
          <input type='number' 
          className='u-full-width'
          placeholder='Agrega tu Presupuesto'
          onChange={e=>guardarCantidad(e.target.value)}
          />
          <input type='submit' className='button-primary u-full-width' 
          value='Definir Presupuesto'/>
      </form>
    </Fragment>
  );
}
export default Pregunta;

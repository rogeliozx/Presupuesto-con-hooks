import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){

    const {guardarGasto,guardarCrearGasto}=props;
    //state
    const [nombreGasto,guardarNombreGasto]=useState('');
    const [cantidadGasto,guardarCantidadGasto]=useState(0);
    const [error,guardarError]=useState(false);

    const agregarGasto=e=>{
        e.preventDefault();
        //validar
        if (cantidadGasto<=0||isNaN(cantidadGasto) ||cantidadGasto===null || nombreGasto==='') {
            guardarError(true);
            return;
        }
        const gasto={
            nombreGasto,
            cantidadGasto,
            id:shortid.generate()
        }
//pasa al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //eliminar alerta
        guardarError(false);
        //resetear form
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return(
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos aqui</h2>
            {error? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto'/>:null}
            <div className='campo'>
                <label for='gastos'>Nombre gastos</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='Ej. Transporte'
                onChange={e=>guardarNombreGasto(e.target.value)}
                value={nombreGasto}
                />
            </div>
            <div className='campo'>
                <label for='gastos'>Cantidad gastos</label>
                <input 
                type='number'
                className='u-full-width'
                placeholder='100'
                onChange={e=>guardarCantidadGasto(e.target.value)}
                value={cantidadGasto}
                />
            </div>
            <input type='submit' className='button-primary u-full-width' value='Agregar Gasto'/>
        </form>
    )
}
export default Formulario;
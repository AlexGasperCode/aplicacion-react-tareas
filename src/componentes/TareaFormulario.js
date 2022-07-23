import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {
  return (
    <form className='tarea-formulario'>
        <input 
          type='text' 
          placeholder='Escribe una tarea'
          className='tarea-input' 
          name='texto'/>
        <button className='tarea-boton'>
          Agregar Tarea
        </button>
    </form>
  );
}
export default TareaFormulario; 

//Creación de componente TareaFormulario
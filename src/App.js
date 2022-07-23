import './App.css';
import officeLogo from './imagenes/office-logo.png';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='office-logo-contenedor'>
        <img src={officeLogo} className='office-logo'/>  
     </div>
     <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <TareaFormulario />
     </div>
    </div>
  );
}
export default App;

//src={officeLogo} no olvidar pegar la importancion 

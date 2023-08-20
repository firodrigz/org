import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
 const [colaboradores, actualizarColaboradores] = useState([]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //             condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]) //es una copia
  }

  //Listado de equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },    
  ]

  return (
    <div> 
      <Header></Header>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map( (equipo) => equipo.titulo)} registrarColaborador={registrarColaborador}/> : <></>}       
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
            return <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} />  //Siempre que trabajamos con map hay que usar key
        })
      }
    </div>
  );
}

export default App;

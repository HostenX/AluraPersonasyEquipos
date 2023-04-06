import { useState } from 'react';
import './App.css';
import Header from './components/Header/';
import Form from './components/form/';
import MyOrg from './components/MyOrg';
import Team from './components/Team';

function App() {
const[showForm, updateShow]=useState(true)

//Ternario --> condicion ? seMuestra : noSeMuestra
// Condicion && seMuestra

const changeShow = () =>{
  updateShow(!showForm)
}

//Lista de Equipos
const teams=[
{
  titulo: "Programación",
  primaryColor: "#57C278",
  secondaryColor:"#D9F7E9"
},
{
  titulo: "Front End",
  primaryColor: "#82CFFA",
  secondaryColor:"#E8F8FF"
},
{
  titulo: "Data Sience",
  primaryColor: "#A6D157",
  secondaryColor:"#F0F8E2"
},
{
  titulo: "DevOps",
  primaryColor: "#E06B69",
  secondaryColor:"#FDE7E8"
},
{
  titulo: "Ux y Diseño",
  primaryColor: "#DB6EBF",
  secondaryColor:"#FAE9F5"
},
{
  titulo: "Móvil",
  primaryColor: "#FFBA05",
  secondaryColor:"#FFF5D9"
},
{
  titulo: "Innovación y Gestión",
  primaryColor: "#FF8A29",
  secondaryColor:"#FFEEDF"
}
]

  return (
    <div>
      <Header/>
      { showForm && <Form teams={teams.map((team)=>team.titulo)}/>}      
      <MyOrg changeShow ={changeShow}/>

      { 
        teams.map((team) => <Team team={team} key={team.titulo}/>)
      }

    </div>
  );
}

export default App;

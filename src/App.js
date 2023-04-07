//import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/';
import Form from './components/form/';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  //Obtener Colaboradores de un local Storage
  const [collaborators, updateCollaborators]=useState(
    // JSON.parse(localStorage.getItem("collaborators")) || 
    [
      {
        team:"Front End",
        photo: "https://github.com/hostenx.png",
        name:"Juan Esteban Ayala Ramirez",
        charge:"Ingeniero"
      },
      {
        team:"Data Sience",
        photo: "https://github.com/Mari1345Espu.png",
        name:"Maria Fernanda Escobar Pulido",
        charge:"Ingeniera"
      },
      {
        team:"Ux y Diseño",
        photo: "https://github.com/HariNamakura.png",
        name:"Nelson Gabriel Cardenas Gomez",
        charge:"Ingeniero"
      },
      {
        team:"Front End",
        photo: "https://github.com/Mcdiek.png",
        name:"Diego Gantiva",
        charge:"Electronics and tecnology teacher."
      }
    ]
  ) 
  
  const[showForm, updateShow]=useState(true) //Mostrar Formulario

  const[teams, setTeams]=useState([
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
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // Condicion && seMuestra

  const changeShow = () =>{
    updateShow(!showForm)
  }

  //registrar Colaborador

  const registerColab = (colab) =>{
    console.log("Nuevo Colaborador", colab)
    //Spread Operator
    updateCollaborators([...collaborators, colab])
  }

    // Cuando los colaboradores cambian, actualizamos el localStorage
  //     useEffect(() => {
  //   localStorage.setItem("collaborators", JSON.stringify(collaborators));
  // }, [collaborators]);

  //Eliminar Colaborador
  const deleteCollaborator = () =>{
    console.log("Eliminar Colaborador")
  }

  //Actualizar color de equipo
  const setColor=(color, titulo)=>{
    console.log("Actualizar ", color, " ", titulo)
    const updatedTeams=teams.map((team)=>{
      if(team.titulo === titulo){
        team.primaryColor=color
      }

      return team
    })

    setTeams(updatedTeams)
  }



  

    //Crear Componentes
    return (
      <div>
        <Header/>
        { 
          showForm && <Form 
          teams={teams.map((team)=>team.titulo)}
          registerColab={registerColab}
        />
        }      
        <MyOrg changeShow ={changeShow}/>

        { 
          teams.map((team) => <Team
              team={team} 
              key={team.titulo}
              collaborators={collaborators.filter(colab	=> colab.team === team.titulo)}
              deleteCollaborator={deleteCollaborator}
              setColor={setColor}
            />
           )
        }

        <Footer/>
      </div>
    );
  }

export default App;
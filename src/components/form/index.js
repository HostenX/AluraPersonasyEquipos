import { useState } from 'react';
import './Form.css'
import TextField from '../TextField';
import OptionList from '../OptionList';
import Button from '../button';

const Form = (props) =>{

    const[name, setName]=useState("")
    const[charge, setcharge]=useState("")
    const[photo, setPhoto]=useState("")
    const[team, setTeam]=useState("")

    const{registerColab}=props

    const sendData =(e)=>{
        e.preventDefault()
        console.log("Manejar Envio")
        let dataToSend = {
            name,
            charge,
            photo,
            team
        }        
        registerColab(dataToSend)
    }

    return <section className='formulario'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor ={name} 
                updateValue={setName}
            />

            <TextField 
                title = "Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={charge} 
                updateValue={setcharge}
            />

            <TextField 
                title = "Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={photo} 
                updateValue={setPhoto}
            />

            <OptionList
                valor={team} 
                updateTeam={setTeam}
                teams={props.teams}
            />
            <Button title ="Crear"/>
        </form>
    </section>
}

export default Form;
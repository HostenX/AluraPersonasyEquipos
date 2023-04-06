import './Form.css'
import TextField from '../TextField';
import OptionList from '../OptionList';
import Button from '../button';

const Form = () =>{

    const sendData =(e)=>{
        e.preventDefault()
        console.log("Manejar Envio", e)
        
    }

    return <section className='formulario'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField title ="Nombre" placeholder="Ingresar nombre" required/>
            <TextField title = "Puesto" placeholder="Ingresar puesto" required/>
            <TextField title = "Foto" placeholder="Ingresar enlace de foto" required/>
            <OptionList/>
            <Button title ="Crear"/>
        </form>
    </section>
}

export default Form;
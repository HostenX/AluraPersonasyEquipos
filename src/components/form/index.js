import './Form.css'
import TextField from '../TextField';

const Form = () =>{
    return <section className='formulario'>
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField title ="Nombre" placeholder="Ingresar nombre"/>
            <TextField title = "Puesto" placeholder="Ingresar puesto"/>
            <TextField title = "Foto" placeholder="Ingresar enlace de foto"/>
        </form>
    </section>
}

export default Form;
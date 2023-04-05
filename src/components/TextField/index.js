import './TextField.css'

const TextField = (props) =>{
    console.log("datos:" + props.title);
    const placeholderModificado = `${props.placeholder}...`
    return <div className='campo-texto'>
        <label>{props.title}</label>
        <input placeholder={placeholderModificado}/>
    </div>
}

export default TextField
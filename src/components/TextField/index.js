import { useState } from 'react'
import './TextField.css'

const TextField = (props) =>{
    const placeholderModificado = `${props.placeholder}...`

    const manageChange =(e) =>{
        props.updateValue(e.target.value)
    }

    return <div className='campo-texto'>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manageChange}
            />
    </div>
}

export default TextField
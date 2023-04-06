import './optionList.css'

const OptionList = () =>{


//metodo map -> arreglo.map((equipo, index)=>){
//    return <option></option>
//  })
    const equipos=[
        "Programación",
        "Front End",
        "Data Sience",
        "DevOps",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select>
            { equipos.map((equipo,index) => <option key={index}>{equipo}</option>) }
        </select>
    </div>
}

export default OptionList;
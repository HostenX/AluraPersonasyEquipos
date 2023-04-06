import './optionList.css'

const OptionList = (props) =>{


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

    const manageChange = (e) =>{
        props.updateTeam(e.target.value)

    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manageChange}>
            <option value = "" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default OptionList;
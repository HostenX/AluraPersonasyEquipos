import { useState } from "react"
import	"./MyOrg.css"

const MyOrg = (props) =>{
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}/>

    </section>
}

export default MyOrg
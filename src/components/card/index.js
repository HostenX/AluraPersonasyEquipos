import"./card.css"
import {AiFillCloseCircle} from "react-icons/ai"

const Card =(props)=>{
    const{name, charge, photo, team} = props.datos
    const {primaryColor, deleteCollaborator}=props
    return<div className="card">
        <AiFillCloseCircle className="delete" onClick={deleteCollaborator}/>
        <div className="cardHeader" style={{backgroundColor:primaryColor}}>
        <img src={photo} alt="photo"></img>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{charge}</h5>
        </div>
    </div>
}

export default Card
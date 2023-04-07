import Card from '../card'
import './team.css'
import hexToRgba from 'hex-to-rgba'

const Team = (props) =>{
    //Destructuracion
    const { primaryColor, secondaryColor, titulo } = props.team
    const {collaborators, deleteCollaborator, setColor} = props
    const obj ={
        backgroundColor: hexToRgba(primaryColor, 0.6) 
    }

    const underline ={borderColor: primaryColor}

   return <>{collaborators.length > 0 &&
        <section className="team" style={obj}>
            <input
                type='color'
                className='input-color'
                value={primaryColor}
                onChange={(evento)=>{
                    setColor(evento.target.value, titulo)
                }}
            />
        <h3 style={underline}>{titulo}</h3>
        <div className="colaborators">
            {
                collaborators.map( (colab, index) => <Card 
                datos={colab} 
                key={index} 
                primaryColor={primaryColor}
                deleteCollaborator={deleteCollaborator}
                />
                )
            }
        </div>
    </section>
    }
    </>
}
export default Team
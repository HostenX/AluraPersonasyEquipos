import Card from '../card'
import './team.css'

const Team = (props) =>{
    //Destructuracion
    const { primaryColor, secondaryColor, titulo } = props.team
    const {collaborators} = props
    const obj ={
        backgroundColor: secondaryColor
    }

    const underline ={borderColor: primaryColor}

   return <>{collaborators.length > 0 &&
        <section className="team" style={obj}>
        <h3 style={underline}>{titulo}</h3>
        <div className="colaborators">
            {
                collaborators.map( (colab, index) => <Card 
                datos={colab} 
                key={index} 
                primaryColor={primaryColor}
                />
                )
            }
        </div>
    </section>
    }
    </>
}
export default Team
import Card from '../card'
import './team.css'
const Team = (props) =>{
    //Destructuracion
    const { primaryColor, secondaryColor, titulo } = props.team

    const obj ={
        backgroundColor: secondaryColor
    }
    const underline ={
        borderColor:primaryColor

    }


   return <section className="team" style={obj}>
    <h3 style={underline}>{titulo}</h3>
    <div className="colaborators">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </div>
   </section>
}
export default Team
import"./card.css"

const Card =(props)=>{
    return<div className="card">
        <div className="cardHeader">
        <img src="https://github.com/hostenx.png" alt="Hosten"></img>
        </div>
        <div className="info">
            <h4>Hosten</h4>
            <h5>Instrucor</h5>
        </div>
    </div>
}

export default Card
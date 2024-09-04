
import {Link} from 'react-router-dom'
function Card(props){
    return(
        <div className="card shadow" style={{width:'16rem',height:"20rem"}}>
        <img src={props.src} className="card-img-top" alt="img" style={{width:"100%",height:"10rem"}}/>
        <div className="card-body">
          <h5 className="card-title fs-5">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Link to={props.gocard} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    )
}
export default Card
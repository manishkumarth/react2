
import { useParams } from "react-router-dom"
function User(){
    const params=useParams()
    return(
        <div className="container mt-5"><h1>hi my name is {params.username}</h1></div>
    )
}

export default User
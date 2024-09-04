// import styles from './Header.module.css'
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <div classNameName='container-flued position-fixed'>

      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container">
        <div>
          <a className="navbar-brand" to="/"><img src="./img/logo1.png" style={{ height: "40px", width: "50px" }} alt="logo" /></a>
         </div>
 
          <div className=" " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link className={`(e)=>{return e.isActive?"red":"";} nav-link`} to="/course">course</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact" >contact us</NavLink>
              </li>
              <li>
                <NavLink className={ `(e)=>{return e.isActive?"text-primary":""} btn btn-info`} to="/Signin">Sign-In</NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
// import { Button } from "bootstrap/dist/js/bootstrap.bundle.min"
// import { Card } from "bootstrap/dist/js/bootstrap.bundle.min"
import {Link} from 'react-router-dom'
import styles from './Home.module.css'
import Card from '../coursecard/CourseCard'
// import Card from './coursecard/CourseCard.jsx'

function Home() {
  return (
    
    <div className={`${styles.homeh1} container-flued px-0`}>
      <div className={`${styles.homep} container`}>
       <h2> wel come to our homepage</h2>
       <div className='container'>
        <div className='col'>
       <Link type="button" className='btn btn-dark '>see more....</Link>
       </div>
       <div className=' col'>
       <Link type="button" className='btn btn-dark-outline bg-secondary'>see more....</Link>
       </div>
       <Card />
       </div>
      </div>
      <div className='bg-dark container rounded text-light'>
    <h2 className='text-center'> @!explore more course here</h2>
      </div>
    </div>
  
  )
}
export default Home
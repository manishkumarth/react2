
import Header from './components/header/Header.jsx'
import './App.css'

import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Course from './components/course/Course.jsx'
import Signin from './components/signin/Signin.jsx'
import User from './components/user/User.jsx'
// import Footer from './components/footer/Footer.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

// import Cardpro from '/img.jsx'
import Card from './components/coursecard/CourseCard.jsx'
// console.log(Cardpro[0].src)
function App() {

  const router=createBrowserRouter([
    {
      path :"/",
      element:<><Header /><Home />

      <div className="container mt-5">
          <div className='row gap-5 d-flex justify-content-center align-item-center '>
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      </div>
      </div>
      </>
    },

    //  course card section 
    {
      path:"/Course",
      element:<><Header /><Course /> 
      <div className="container">
      <div className='row gap-5 d-flex justify-content-center align-item-center '>
      <Card 
      src="./img/cardimg1.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      gocard="https://www.oxfordinstitute.in/online-python-course.php"
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg3.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg3.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg1.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg3.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      <Card 
      src="./img/cardimg2.png"
      title="python"
      description=" Introduction, Data Types, Variables,"
      />
      
   
      </div>
      </div>
      </>
    },
    {
      path :"/About",
      element:<><Header /><About /></>
    },
    {
      path :"/Contact",
      element:<><Header /><Contact /></>
    },
    {
    path :"/Signin",
    element :<><Header /><Signin /></>
    },
    {
      path :"/user/:username",
      element :<><Header /><User /></>
    }
  ])

  return (
    <>
      
     <RouterProvider router={router} />

    </>
  )
}

export default App

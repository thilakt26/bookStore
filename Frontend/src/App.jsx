import React from 'react'
import Home from './Home'
import Course from './Component/Course'
import {Route,Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Component/Signup'
import Contact from './Component/Contact'


function App() {
  return (
   <>
   

<div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home></Home>}/>

<Route path="/course" element={<Courses/>}/>

<Route path="/signup" element={<Signup/>}></Route>

<Route path="/Contact" element={<Contact/>}></Route>


</Routes>
</div>
    
   </>
  )
}

export default App
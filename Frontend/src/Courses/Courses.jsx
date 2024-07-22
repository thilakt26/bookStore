import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'



function Courses() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <Course></Course>
    </div>
    <Footer></Footer>

    </>
  )
}

export default Courses
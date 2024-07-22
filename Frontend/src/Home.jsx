import React from 'react';
import Navbar from './Component/Navbar'
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import FreeBook from './Component/FreeBook';

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <FreeBook></FreeBook>
    <Footer></Footer>
    </>
  )
}

export default Home
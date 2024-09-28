import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState,useEffect } from 'react';

function FreeBook() {

  const [book , setBook]=useState([])

  useEffect(()=>{ 
  const getBook=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/book");
      console.log(res.data)
      setBook(res.data.filter((data) => data.ctaegory === "free"))
  
    } 
    catch(error){
  console.log(error);
    }}
    getBook();
  
  },[])


  // const filterData = list.filter((data) => data.ctaegory === "free"); // Fixed typo in 'category' if it's a typo
  // // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md -20 px-4'>
        <div>
          <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi aperiam accusantium architecto! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis vero porro fugiat!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => ( // Added parentheses to ensure the return value
              <Cards item={item} key={item.id} /> // Added return statement for Cards component
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;

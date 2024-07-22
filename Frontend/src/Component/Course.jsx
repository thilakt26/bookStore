import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards.jsx';
import { Link } from 'react-router-dom';



function Course() {
//  console.log(list);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md -20 px-4 '>
      <div className='mt-28 items-center justify-center text-center '>
        <h1 className=' text-2xl  md:text-4xl'>
          We Delighted to Have You  <span className='text-pink-500'>Here! :)</span> 
        </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo error earum doloremque, cum laudantium explicabo eaque impedit aliquam suscipit aperiam, corrupti reprehenderit excepturi voluptatum tempora commodi veritatis ab ipsa animi consequuntur ullam consectetur recusandae fuga sunt asperiores? Voluptatum enim, magnam perferendis reiciendis ratione impedit reprehenderit, nemo nobis temporibus, mollitia vel?</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-2 py-1  rounded-md hover:bg-pink-700 duration:300 mt-6 '>Back</button></Link>
        
      </div>

<div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>

  {
   list.map((item)=>(
    <Cards key={item.id} item={item}/>
   ))
  }
</div>
      
    </div>
    </>
  )
}

export default Course
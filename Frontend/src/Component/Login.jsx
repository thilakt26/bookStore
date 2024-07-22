import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from "react-hook-form"



function Login() {

  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg ">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email </span><br/>
        <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border-rounded-md outline-none'   {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className="text-sm text-red-500">This field is required</span>}

    </div>


{/* Passsword */} 

<div className='mt-4 space-y-2'>
        <span>Password </span><br/>
        <input type="password" placeholder='Enter your Passsword' className='w-80 px-3 py-1 border-rounded-md outline-none'   {...register("password", { required: true })}></input> 
        <br /> 
        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
      

    </div>

    {/*  login button*/}

    <div className='flex justify-around mt-4 '>
        <button type="submit"   className='px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 duration-200'>Login</button>
        <p>Not Registered ?

            <Link to="/signup"> <span className='underline text-blue-500 cursor-pointer'>SignUp</span></Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
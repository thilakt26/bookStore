import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function Signup() {
  const navigate = useNavigate();  // Hook to handle navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (response.data) {
        toast.success('Successfully created!');
        navigate('/login.jsx');  // Redirect to login page after signup
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || 'An error occurred'}`);
      } else {
        toast.error('An error occurred');
      }
      console.error('Error message:', error.message);
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className='w-[600px]'>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className='mt-4 space-y-2'>
                <span>Name</span><br />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-120'
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                
                <span>Email </span><br />
                <input
                  type="email"
                  placeholder='Enter your Email'
                  className='w-120 px-3 py-1 border-rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Password </span><br />
                <input
                  type="password"
                  placeholder='Enter your Password'
                  className='w-120 px-3 py-1 border-rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              <div className='flex justify-around mt-4'>
                <button
                  type="submit"
                  className='px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 duration-200'
                >
                  Signup
                </button>
                <p>Already Have an Account? {" "}
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => { document.getElementById("my_modal_3").showModal() }}
                    type="button"  // Added type to avoid triggering form submission
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />  
    </>
  );
}

export default Signup;

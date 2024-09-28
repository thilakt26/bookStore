import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    console.log(data);

    try {
      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(response.data);
      if (response.data) {
        toast.success('Logged in Successfully');
        localStorage.setItem("Users", JSON.stringify(response.data.userInfo));
        onClose(); // Close the dialog upon successful login
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
    <div>
      {isOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button for the modal */}
              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              
              <h3 className="font-bold text-lg">Login</h3>
              <div className='mt-4 space-y-2'>
                <span>Email </span><br/>
                <input
                  type="email"
                  placeholder='Enter your Email'
                  className='w-80 px-3 py-1 border-rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password </span><br/>
                <input
                  type="password"
                  placeholder='Enter your Password'
                  className='w-80 px-3 py-1 border-rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br /> 
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>

              {/* Login button */}
              <div className='flex justify-around mt-4'>
                <button
                  type="submit"
                  className='px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 duration-200'
                >
                  Login
                </button>
                <p>Not Registered ?
                  <Link to="/signup">
                    <span className='underline text-blue-500 cursor-pointer'>SignUp</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;

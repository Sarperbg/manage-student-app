import React, { useState } from 'react'
import validation from '../validation/Validation'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"

const Home = () => {


  const [errors, setError] = useState({})
  const [signUp, setSignUp] = useState(true)
  const [values, setValues] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
  }
  return (
    <div className='w-full h-full flex bg-[#FEAF00]'>

      <div className='w-[475px] h-[550px] relative bg-white rounded-lg  justify-center items-center mx-auto m-16 text-center '>

        <div className='flex flex-col'>
          <h1 className='text-black text-[24px] font-bold font-Montserrat mt-10 border-l-4 border-[#F8D442] ml-[15%] mr-[15%] 
          '>MANAGE COURSES REGİSTER PAGE</h1>

          <h3 className='flex justify-center items-center text-center text-black text-[22px] font-semibold font-Montserrat mt-10'>
            SIGN UP</h3>

          <h3 className='flex justify-center items-center text-center text-[#6C6C6C] text-[14px] font-normal font-Montserrat mt-4'>Enter your credentials to access your account</h3>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mt-6'>

              {/* Section1 */}
              <div className='w-[90%] mx-auto  overflow-hidden'>
                <label htmlFor="email" className="flex text-[14px]  font-Montserrat font-medium text-[#6C6C6C] text-left ml-8">
                  Email
                </label>
                <input
                  type="text"

                  onChange={(e) => setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  className={`text-black text-[12px] border mt-2 ml-4 px-4 py-3 w-full h-12 rounded-md outline-none'
                    }`}
                  aria-describedby="error-message"
                  required
                />
              </div>

              {/* section2 */}
              <div className='w-[90%] mx-auto mt-6 overflow-hidden'>
                <label htmlFor="password" className="flex text-[14px]  font-Montserrat font-medium text-black text-left ml-8">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  className={`text-[#CDCDCD] text-[12px] border mt-2 ml-4 px-4 py-3 w-full h-12 rounded-md outline-none '
                    }`}
                  aria-describedby="error-message"
                  required
                />
              </div>


              {/* section3 */}
              <div className='w-[90%] mx-auto mt-6  overflow-hidden'>
                <div className='w-full ml-4 mx-auto h-[44px] bg-[#FEAF00] flex justify-center items-center'>
                  <button className='text-[14px] text-[#FFFFFF] font-Montserrat ' onClick={(e) => {
                    e.preventDefault();
                  }}
                  >REGISTER </button>

                </div>
                
               

                <div className='w-full mt-2 text-[14px] flex justify-center items-center gap-x-1'>
                  <button className='text-[14px] text-[#6C6C6C] font-Montserrat font-normal'>Forgot your password?</button>
                  <button className='text-[14px] text-[#FEAF00] font-Montserrat font-semibold'>Reset Password</button>
                </div>


              </div>
             
            </div>


          </form>
        </div>


      </div>

    </div>


  )

}

export default Home

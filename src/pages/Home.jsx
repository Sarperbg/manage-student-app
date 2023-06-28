import React, {  useState } from 'react'
import validation from '../validation/Validation'
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import { FcGoogle } from "react-icons/fc"
import { toast } from 'react-toastify';
const Home = () => {


  const [signUp, setSignUp] = useState(true);  
  const [authData, setAuthData] = useState({ email: "", password: "" })

  const [values] = useState({ email: "", password: "" })

  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const [errors, setError] = useState({})

  const navigate = useNavigate();
  
  // function handleChange(e) {
  //   setValues({...values, [e.target.name]: e.target.value});
  // };

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
  }

  const onChangeFunc = (e) => {
    setAuthData({...authData, [e.target.name]: e.target.value})
  }
  const authFunc = async() =>  {
    if(signUp) {
     try {
      const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
      const user = data.user;
      if(user) {
        window.location = "/dashboard"
      }
     } catch (error) {
      toast.error(error.message)    
     }
    } else {
      try {
        const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
        const user = data.user;
        if(user) {
          window.location = "/dashboard"
        }
       } catch (error) {
        toast.error(error.message)    
       }
    }
  }

  return (
    <div className='w-full h-full flex bg-[#FEAF00]'>

      <div className='w-[475px] h-[550px] relative bg-white rounded-lg  justify-center items-center mx-auto m-16 text-center '>

        <div className='flex flex-col'>
          <h1 className='text-black text-[32px] font-bold font-Montserrat mt-10 border-l-4 border-[#F8D442] ml-[15%] mr-[15%] 
          '>MANAGE COURSES</h1>

          <h3 className='flex justify-center items-center text-center text-black text-[22px] font-semibold font-Montserrat mt-10'>
            
            <span>{signUp ? "REGİSTER" : "LOGİN"}</span>
            </h3>

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
                  name='email'
                  value={authData.email}
                  onChange={onChangeFunc}
                  type="text"
                  placeholder="Enter your email"
                  className='text-black text-[12px] border mt-2 ml-4 px-4 py-3 w-full h-12 rounded-md outline-none'
                 
                />
              </div>

              {/* section2 */}
              <div className='w-[90%] mx-auto mt-6 overflow-hidden'>
                <label htmlFor="password" className="flex text-[14px]  font-Montserrat font-medium text-black text-left ml-8">
                  Password
                </label>
                <input
                   name='password'
                   value={authData.password}
                   onChange={onChangeFunc}
                   type='password'
                  placeholder="Enter your password"
                  className='text-[#CDCDCD] text-[12px] border mt-2 ml-4 px-4 py-3 w-full h-12 rounded-md outline-none'
                  
                
                />
              </div>


              {/* section3 */}
              <div className='w-[90%] mx-auto mt-6  overflow-hidden'>
                <div className='w-full ml-4 mx-auto h-[44px] bg-[#FEAF00] flex justify-center items-center'>
                  <div onClick={authFunc} className=' text-[14px] text-[#FFFFFF] font-Montserrat '>{signUp ? "REGİSTER": "LOGIN"}</div>

                </div>
               
            

                <div className='w-full mt-2 text-[14px] flex flex-col justify-center items-center gap-x-1'>
                  <div className='font-Montserrat font-bold'>
                  <p onClick={()=> setSignUp(!signUp)}>{signUp ? "Daha önceden kayıt oldunuz mu?" :"Kayıt olmak mı istiyorsun?"} </p>

                  </div>
                  <div className='flex gap-x-2'>
                  <button className='text-[14px] text-[#6C6C6C] font-Montserrat font-normal'>Forgot your password?</button>
                  <button className='text-[14px] text-[#FEAF00] font-Montserrat font-semibold'>Reset Password</button>
                  </div>
                 
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

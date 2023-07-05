import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const User = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  const {id} = useParams();

  return (
    <div className='w-full h-screen my-auto flex justify-center items-center flex-col bg-gradient-to-r from-[#FEAF00] to-[#F8D442]'>
      {user && (
        <>
        <div className='w-[500px] h-[500px] flex justify-center items-center border border-black m-auto bg-white'>
          <div className='w-5/12 flex flex-col space-y-4'>
            <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>Name:</h2>
            <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>Email:</h2>
            <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>Phone:</h2>
            <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>Website:</h2>
            <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>Company Name:</h2>


          </div>
          <div className='w-5/12 flex flex-col space-y-4'>
          <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>{user.firstName + user.lastName}</h2>
          <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>{user.email}</h2>
          <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>{user.phone}</h2>
          <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>{user.domain}</h2>
          <h2 className='text-black font-semibold font-Montserrat text-2xl border-b border-black'>{user.company.name}</h2>


          </div>
        </div>
        </>
      )}
      
      <Link to="/students"
       className='flex-col text-black font-semibold font-Montserrat text-2xl flex justify-center 
       items-center border-b border-black mb-32 bg-zinc-400 rounded-xl w-60 transition-all hover:scale-95'>
        Back To Home</Link>
    </div>
  )
}

export default User

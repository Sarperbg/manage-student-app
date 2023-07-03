import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [domain, setDomain] = useState("")
    const [companyName, setCompanyName] = useState("")

    const navigate = useNavigate();

    const data = {
        firstName: firstName,
        email: email,
        phone: phone,
        domain: domain,
        companyName: companyName
    }

    function Submit(e) {
        e.preventDefault();

        axios
        .post("https://dummyjson.com/users", data)
        .then(
            navigate('/students')
        );
    }
    

    return (
        <div className='flex w-full h-full bg-gradient-to-r from-[#FEAF00] to-[#F8D442]'>
            <div className='w-[600px] h-[600px] flex flex-col justify-center mx-auto items-center mt-16 bg-white'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Add User</h1>

<form className='w-[80%] h-full flex flex-col justify-center items-center'>
    <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type='text'
        placeholder='Enter your name'
        className='w-[80%] bg-white/10 mt-4  text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
    />
    <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder='Enter your email'
        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
    />
    <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type='number'
        placeholder='Enter your phone'
        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
    />

    <input
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        type='text'
        placeholder='Enter your website'
        className='w-[80%] bg-white/10 mt-4  text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
    />
    <input
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        type='text'
        placeholder='Enter your company name'
        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
    />
    <button onClick={Submit} className='w-[80%] bg-blue-600 text-white font-semibold text-xl font-Montserrat  py-4 mt-2'>Add User</button>
</form>

            </div>
            
        </div>
    )
}

export default AddUser

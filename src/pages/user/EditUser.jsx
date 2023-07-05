import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [domain, setDomain] = useState("")
    const [companyName, setCompanyName] = useState("")

    const navigate = useNavigate();

    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`).then((res) => {
            setFirstName(res.data.firstName)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setDomain(res.data.domain)
            setCompanyName(res.data.companyName)
        });
    }, []);

    const data = {
        firstName: firstName,
        email: email,
        phone: phone,
        domain: domain,
        companyName: companyName,
    }

    function Update(e) {
        e.preventDefault();
        axios.put(`https://dummyjson.com/users/${id}`, data)

            .then(
                navigate("/students")
            )
    }



    return (
        <div className='w-screen h-screen flex flex-col justify-center  items-center bg-gradient-to-r from-[#FEAF00] to-[#F8D442]'>

            <form className='w-[600px] h-[600px] m-auto flex flex-col justify-center items-center bg-white'>
                <h1 className='text-black text-3xl font-semibold font-Montserrat'>Edit User</h1>

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
                    placeholder='Enter your company name '
                    className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                />
                <button
                    onClick={Update}
                    className='w-[80%] bg-blue-600 text-white font-semibold text-xl font-Montserrat  py-4 mt-2'>Update User</button>

                <Link to="/students"
                    className='text-black font-semibold font-Montserrat text-2xl flex justify-center items-center border-b border-black mt-8 bg-zinc-400 rounded-xl w-60 transition-all hover:scale-95'>Back To Home</Link>
            </form>

        </div>
    )
}

export default Edit

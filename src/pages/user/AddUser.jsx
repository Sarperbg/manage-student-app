import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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

        axios.post("https://dummyjson.com/users/add", data)
            .then(
                navigate('/students')
            )
            .then((response) => {
                console.log(data)

            })
    }

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setUsers({
    //         ...users,
    //         [e.target.name]: value
    //     });
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userData = {
    //         firstName: users.firstName,
    //         email: users.email,
    //         phone: users.phone,
    //         domain: users.phone,
    //         gender: users.gender
    //     };
    //     axios.post("https://dummyjson.com/users/add", userData)
    //         .then(
    //             navigate('/students')
    //         )
    //         .then((response)=> {
    //             console.log(users)
    //             setUsers(response.data, ...[users]);

    //         })
    //         setFirstName('');
    //         setEmail('');
    //         setPhone('');
    //         setEmail('');
    //         setGender('');

    // };


    return (


        <div className='flex w-full h-screen  bg-gradient-to-r from-[#FEAF00] to-[#F8D442]'>
            <div className='w-[600px] h-[600px] flex flex-col justify-center m-auto items-center bg-white rounded-lg'>
                <h1 className='text-black text-3xl font-semibold font-Montserrat'>Add User</h1>

                <form className='w-[80%] h-full flex flex-col justify-center items-center'
                >
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Enter your name'
                        className='w-[80%] bg-white/10 mt-4  text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                    />
                    <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Enter your phone'
                        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                    />

                    <input
                        type="text"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder='Enter your website'
                        className='w-[80%] bg-white/10 mt-4  text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                    />
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder='Enter your company name'
                        className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6  border border-zinc-400'
                    />
                    <button
                        onClick={Submit}
                        className='w-[80%] bg-blue-600 text-white font-semibold text-xl font-Montserrat  py-4 mt-2'>
                        Add User
                    </button>
                 
                    <Link to="/students"
                        className=' text-black font-semibold font-Montserrat text-2xl flex justify-center items-center 
                        border-b border-black mt-8 bg-zinc-400 rounded-xl w-60 transition-all hover:scale-95'>
                        Back To Home</Link>
                </form>

            </div>

        </div>
    )
}

export default AddUser

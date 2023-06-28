import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoLogoUsd } from "react-icons/io"
import { SlGraduation } from "react-icons/sl"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { HiOutlineLogout } from "react-icons/hi"
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const Sidebar = () => {

    const logOutFunc = async () => {
        toast.success('Çıkış işlemi gerçekleştiriliyor...')
        await signOut(auth)
        setTimeout(() => {
            window.location = "/"

        }, 2000);
    }
    return (
        <div className='h-full bg-[#f2ddc6] '>
            <div className='flex flex-col h-[900px] w-[270px]  bg-[#f2ddc6] justify-start gap-24 '>

                {/* section1 */}
                <div className='flex flex-col '>

                    <h1 className='text-black text-[20px] font-bold font-Montserrat mt-4 border-l-4 border-[#F8D442] ml-[12%] mr-[12%] whitespace-nowrap	'>MANAGE COURSES</h1>

                    <div className='flex justify-center items-center flex-col '>
                        <img src={avatar} className='w-24 h-24 rounded-full mt-8' />
                        <h1 className='font-Montserrat font-bold text-[17px] text-black mt-4'>John Doe</h1>
                        <h3 className='font-Montserrat  font-medium text-[14px] text-[#FEAF00] mt-4'>Admin</h3>
                    </div>

                </div>

                {/* section2 */}

                <div className="flex justify-center items-center mt-4">
                    <ul className="flex flex-col text-[14px] font-Montserrat gap-4">
                        <Link to="/Home" className="w-[193px] font-normal font-Montserrat  h-[41px] hover:bg-[#FEAF00] flex justify-center items-center rounded-[4px] gap-2">
                            <AiOutlineHome size={19} className='flex items-center justify-center ' />
                            Home

                        </Link>
                        <li className="w-[193px] h-[41px] font-normal font-Montserrat flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                            <BsBookmark size={19} className='flex items-center justify-center ' />
                            Course
                        </li>
                        <Link to="/students" className="w-[193px] h-[41px] font-normal font-Montserrat  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                            <SlGraduation size={19} className='flex items-center justify-center' />

                            Student
                        </Link>
                        <li className="w-[193px] h-[41px]  flex justify-center font-normal font-Montserrat  items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                            <IoLogoUsd size={19} className='flex items-center justify-center ' />

                            Payment
                        </li>

                        <li className="w-[193px] h-[41px]  flex font-normal font-Montserrat  justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                            <HiOutlineDocumentReport size={19} className='flex items-center justify-center ' />

                            Report
                        </li>
                        <li className="w-[193px] h-[41px]  flex font-normal font-Montserrat  justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                            <FiSettings size={19} className='flex items-center justify-center ' />

                            Settings
                        </li>
                    </ul>
                </div>

                {/* section3 */}
                <div className="w-[193px] h-[41px] mx-auto flex text-center justify-center items-center mt-4 gap-2 hover:bg-[#FEAF00]">
                    <div onClick={logOutFunc}>Logout</div>
                    <HiOutlineLogout size={19} className='flex items-center justify-center ' />

                </div>

            </div>
        </div>



    )
}

export default Sidebar

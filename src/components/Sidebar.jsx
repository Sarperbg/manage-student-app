import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoLogoUsd } from "react-icons/io"
import { SlGraduation } from "react-icons/sl"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { HiOutlineLogout } from "react-icons/hi"
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='flex flex-col h-[900px] w-[270px]  bg-[#f2ddc6] justify-start gap-24 '>

            {/* section1 */}
            <div className='flex flex-col '>

                <h1 className='text-black text-[20px] font-bold font-Montserrat mt-4 border-l-4 border-[#F8D442] ml-[12%] mr-[12%] 
        whitespace-nowrap	'>MANAGE COURSES</h1>

                <div className='flex justify-center items-center border-8'>
                    test
                </div>

            </div>

            {/* section2 */}

            <div className="flex justify-center items-center mt-4">
                <ul className="flex flex-col text-[14px] font-Montserrat gap-4">
                    <Link to="/Home" className="w-[193px] h-[41px] hover:bg-[#FEAF00] flex justify-center items-center rounded-[4px] gap-2">
                        <AiOutlineHome size={19} className='flex items-center justify-center ' />
                        Home

                    </Link>
                    <li className="w-[193px] h-[41px]  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                        <BsBookmark size={19} className='flex items-center justify-center ' />
                        Course
                    </li>
                    <Link to="/students" className="w-[193px] h-[41px]  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                        <SlGraduation size={19} className='flex items-center justify-center' />

                        Student
                    </Link>
                    <li className="w-[193px] h-[41px]  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                        <IoLogoUsd size={19} className='flex items-center justify-center ' />

                        Payment
                    </li>

                    <li className="w-[193px] h-[41px]  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                        <HiOutlineDocumentReport size={19} className='flex items-center justify-center ' />

                        Report
                    </li>
                    <li className="w-[193px] h-[41px]  flex justify-center items-center rounded-[4px] gap-2 hover:bg-[#FEAF00]">
                        <FiSettings size={19} className='flex items-center justify-center ' />

                        Settings
                    </li>
                </ul>
            </div>

            {/* section3 */}
            <div className="w-[193px] h-[41px] mx-auto flex tex-center justify-center items-center mt-4 gap-2 hover:bg-[#FEAF00]">
                <h3>Logout</h3>
                <HiOutlineLogout size={19} className='flex items-center justify-center ' />

            </div>

        </div>


    )
}

export default Sidebar

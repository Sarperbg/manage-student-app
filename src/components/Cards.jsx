import React from 'react'
import { FaGraduationCap } from "react-icons/fa"
import { BsBookmark } from "react-icons/bs"
import { IoLogoUsd } from "react-icons/io"
import { FiUser } from "react-icons/fi"

const Cards = () => {
  return (
    <div className='flex flex-row gap-8 mt-20 ml-8 flex-wrap'>

      <div className='flex w-[255px] h-[157px] bg-[#F0F9FF] rounded-[8px] '>
        <div className='w-[128px] flex-col ml-8 mt-4 justify-start '>
          <FaGraduationCap size={48} className='text-[#74C1ED] ' />
          <h1 className='text-[#6C6C6C] font-Montserrat font-medium text-[14px] mt-4'>Students</h1>
        </div>
        <div className='w-[128px] flex justify-center items-end rounded-[8px] mb-4'>
          <h1 className='font-Montserrat font-bold text-black text-[30px]'>243</h1>
        </div>

      </div>


      <div className='flex w-[255px] h-[157px] bg-[#FEF6FB] rounded-[8px]'>
        <div className='w-[128px] flex-col ml-8 mt-4 justify-start '>
          <BsBookmark size={48} className='text-[#74C1ED] ' />
          <h1 className='text-[#6C6C6C] font-Montserrat font-medium text-[14px] mt-4'>Course</h1>
        </div>
        <div className='w-[128px] flex justify-center items-end rounded-[8px] mb-4'>
          <h1 className='font-Montserrat font-bold text-black text-[30px]'>13</h1>
        </div>

      </div>

      <div className='flex w-[255px] h-[157px] bg-[#FEFBEC] rounded-[8px]'>
        <div className='w-[128px] flex-col ml-8 mt-4 justify-start '>
          <IoLogoUsd size={48} className='' />
          <h1 className='text-[#6C6C6C] font-Montserrat font-medium text-[14px] mt-4'>Payments</h1>
        </div>
        <div className='w-[128px] flex justify-center items-end rounded-[8px] mb-4'>
          <h1 className='font-Montserrat font-bold text-black text-[30px]'> 556,000₺</h1>
        </div>

      </div>

      <div className='flex w-[255px] h-[157px] bg-[#FEAF00]  rounded-[8px]'>
        <div className='w-[128px] flex-col ml-8 mt-4 justify-start '>
          <FiUser size={48} className='text-white' />
          <h1 className='text-white font-Montserrat font-medium text-[14px] mt-4'>Users</h1>
        </div>
        <div className='w-[128px] flex justify-center items-end rounded-[8px] mb-4'>
          <h1 className='font-Montserrat font-bold text-black text-[30px]'>3</h1>
        </div>

      </div>

    </div>
  )
}

export default Cards

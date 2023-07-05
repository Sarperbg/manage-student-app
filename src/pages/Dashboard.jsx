import React from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import Header from '../components/Header'

const Dashboard = ({ users }) => {
  return (

    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col'>
        <Header />
        <div className='text-black font-bold flex justify-center items-center rounded-xl 
        border-2 w-fit mx-auto p-4 bg-slate-200 max-xs:ml-4 max-xs:text-sm max-xs:w-[200px] 
        max-sm:ml-4 max-sm:text-sm max-sm:w-[200px]
        max-md:ml-4 max-md:text-sm max-md:w-[200px]
        ' >
          <h1>Welcome : <span className=''>{users?.email}</span></h1>
        </div>
        <Cards />
      </div>


    </div>
  )
}

export default Dashboard

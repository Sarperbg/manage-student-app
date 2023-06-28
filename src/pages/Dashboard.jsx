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
        <div className='text-black font-bold flex justify-center items-center rounded-xl'>
          <h1>Welcome : <span className=''>{users?.email}</span></h1>
        </div>
        <Cards />
      </div>


    </div>
  )
}

export default Dashboard

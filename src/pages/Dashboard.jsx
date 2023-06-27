import React from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Cards/>
      
    </div>
  )
}

export default Dashboard

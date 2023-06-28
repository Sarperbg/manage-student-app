import React from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col'>
      <Header/>
      <Cards/>
      </div>
     
      
    </div>
  )
}

export default Dashboard

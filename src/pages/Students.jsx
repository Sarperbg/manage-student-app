import React from 'react'
import Sidebar from '../components/Sidebar'
import StudentsList from '../components/StudentsList'
import Header from '../components/Header'

const Students = () => {
  return (
    <>
     

      <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col'>
      <Header/>
      <StudentsList/>
      </div>
     
    </div>
    </>
  )
}

export default Students

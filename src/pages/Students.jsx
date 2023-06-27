import React from 'react'
import Sidebar from '../components/Sidebar'
import StudentsList from '../components/StudentsList'

const Students = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <StudentsList/>
    </div>
  )
}

export default Students

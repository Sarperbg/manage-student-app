import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"

const StudentsList = () => {



  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [blogPosts, setBlogPosts] = useState(users);

  // const deleteData = (index) => {
  //   const updatedData = [...users];
  //   updatedData.splice(index, 1);
  //   setUsers(updatedData);
  // };

  const deleteUser = (index) => {
    const headers = {
      'Authorization': 'Bearer my-token',
      'My-Custom-Header': 'foobar'
    };
    axios.delete('https://dummyjson.com/users/1', { headers })
      .then(() => document.write = 'Delete successful');

  }

  function loadUsers() {
    axios.get('https://dummyjson.com/users')
      .then(res => setUsers(res.data.users))
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    loadUsers(0, 4, 0, "search")

  }
  useEffect(() => {
    loadUsers()
  }, [])


  return (
    <div className='w-full h-full flex flex-col'>

      <div className='flex justify-between items-center mt-8 ml-4  border-8'>
        <div>
          <h3 className='font-Montserrat text-[22px] font-bold text-[#000000] flex items-center'>Students List</h3>

        </div>

        <form className='flex justify-center items-center mr-[5%]'>
          {search}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search objects.."
            className="font-light bg-[#FFFFFF] text-gray-700  text-[14px] flex justify-center m-4 w-[212px] h-[37px]
                             rounded-[8px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"
          />
          <button className='w-[199px] h-[44px] flex justify-center items-center bg-[#FEAF00] rounded-[4px] text-[#FFFFFF]'>ADD NEW STUDENT</button>

        </form>

      </div>

      <div>
        <table className="w-[95%] mx-auto text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead
            className="border-b">
            <tr className='text-[#ACACAC]'>

              <th scope="col" className="text-sm font-medium px-6 py-4">
                Name
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4">
                Email
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4">
                Phone
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4">
                Website
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4">
                Company Name
              </th>
              {users && <button className="flex justify-center items-center font-bold mt-1 text-sm  px-6 py-4 bg-red-800 rounded-xl w-16 h-10"

                onClick={() => deleteUser()}> Delete All
              </button>}

            </tr>
          </thead>


          <tbody>


            {users && users.map((users, index) => (


              <tr key={index} className="bg-white border-b">

                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {users.firstName + users.lastName}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {users.email}

                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {users.phone}

                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {users.domain}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {users.company.name}
                </td>

                <td className='flex justify-center items-center space-x-4 mt-4 mr-4'>

                  <BiEditAlt size={19} className='text-[#FEAF00] cursor-pointer' />

                  <AiOutlineDelete size={19} className='text-[#FEAF00] cursor-pointer' onClick={(index) => deleteUser(index)} />

                </td>
              </tr>

            ))}

          </tbody>
        </table>
      


      </div>
    </div>
  )
}

export default StudentsList

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import profile from '../assets/profile.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai"
import TablePagination from "@material-ui/core/TablePagination";

import { CSVLink, CSVDownload } from "react-csv";


const StudentsList = () => {

  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 6));
    setPage(0);
  };


  const navigate = useNavigate();
  const { id } = useParams();

  // const deleteData = (index) => {
  //   const updatedData = [...users];
  //   updatedData.splice(index, 0);
  //   setUsers(updatedData);
  // };



  const handleReset = () => {
    setUsers("");

  };
  const loadUsers = () => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUsers(res.data.users);
    });
  };


  const postDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://dummyjson.com/users/${id}`)
      .then(res => console.log('Deleteddd', res))


      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadUsers()
  }, []);


  const Filter = (event) => {
    setRecords(users.filter(f => f.firstName.toLowerCase().includes(event.target.value)))
  }

  if (!users || users?.length === 0) {
    return (
      <div className="w-full  font-Montserrat  flex flex-col mx-auto">
        <span className='h-20 p-4 rounded w-full flex justify-center items-center
       bg-yellow-100 text-yellow-700 text-lg'>Gösterilecek veri bulunmuyor.</span>
        <button className='font-bold border-b-4 text-2xl flex justify-center items-center mx-auto rounded-xl  
          flex-col bg-[f1f1f1] transition-all hover:scale-95' onClick={() => navigate("/dashboard")}
        >Go back
        </button>


      </div>

    )
  }

  return (
    <div className='w-full h-full flex flex-col  bg-[#F8F8F8]'>

      <div className='flex justify-between items-center mt-4 ml-8 max-xs:flex-col max-xs:w-[220px] max-sm:flex-col max-md:flex-col max-sm:w-[220px]
       max-lg:flex-col max-md:w-[220px] max-xs:ml-12 max-sm:ml-12 max-xs:justify-end'>
        <div>
          <h3 className='font-Montserrat text-[22px] font-bold text-[#000000] flex items-center max-xs:text-md
          max-sm:text-md max-md:text-md
          '>Students List</h3>
        </div>

        <form className='flex justify-center items-center  max-xs:flex-col  max-sm:flex-col  max-md:flex-col max-xs:ml-[15%] max-xs:mr-[15%] max-xs:mx-auto
        max-sm:ml-[15%] max-sm:mr-[15%] max-sm:mx-auto max-md:ml-[15%] max-md:mr-[15%] max-md:mx-auto  max-lg:ml-[15%] max-md:lg-[15%] max-lg:mx-auto
        '>
          <input
            onChange={Filter}
            type="text"
            placeholder="Search objects.."
            className="font-light bg-[#FFFFFF] text-gray-700  text-[14px] flex justify-center m-4 w-[212px] h-[37px]
            rounded-[8px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"
          />
          <AiOutlineSearch className='text-gray-400 relative -left-10 hover:scale-95 max-xs:-top-11 max-xs:-relative max-xs:left-20
          max-sm:-top-11 max-sm:-relative max-sm:left-20 max-md:-top-11 max-md:-relative max-md:left-20

          '
            size={20} />
          <Link to="add-user"
            className='w-[199px] h-[44px] flex justify-center items-center bg-[#FEAF00] rounded-[4px] text-[#FFFFFF]
            transition-all hover:scale-95 cursor-pointer'>ADD NEW STUDENT</Link>

        </form>
      </div>

      <div className='flex justify-center items-center'>

        <table className="w-full text-center overflow-hidden mt-8 border shadow-md sm:rounded-lg overflow-x:auto
         border-gray-200 dark:border-gray-700
        ">
          <thead
            className="border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-[#ACACAC] dark:bg-gray-900 dark:border-gray-700'>
              <th scope="col" className="text-sm font-medium px-6 py-4  max-xs:text-xs">
                Picture
              </th>

              <th scope="col" className="text-sm font-medium px-6 py-4 max-xs:text-xs">
                Name
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4 max-xs:text-xs">
                Email
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4">
                Phone
              </th>
              <th scope="col" className="text-sm font-medium px-6 py-4">
                Website
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4">
                Gender
              </th>
              {users &&
                <button
                  className="flex font-Montserrat justify-center items-center font-medium mt-1 text-md  py-4 px-4
               bg-red-700 rounded-xl w-24 h-10 whitespace-nowrap transition-all hover:scale-95"

                  onClick={() => handleReset()}> Delete All
                </button>}

            </tr>
          </thead>


          <tbody className='flex-col justify-center items-center'>


            {users && users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

              .map((users, index) => (


                <tr key={index} className="flex-col border-b hover:bg-zinc-200">

                  <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                    <img src={profile} />

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                    {users.firstName}
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
                  <div className=''>

                    <td className='flex whitespace-nowrap text-lg font-light items-center mt-7 space-x-4'>
                      <Link to={`/users/${users.id}`} className='text-[#FEAF00] cursor-pointer'>
                        View
                      </Link>


                      <Link to={`/edit-user/${users.id}`} size={19} className='text-[#FEAF00] cursor-pointer'>
                        <BiEditAlt />
                      </Link>

                      <AiOutlineDelete onClick={(e) => postDelete(users.id, e)} size={19} className='text-[#FEAF00] cursor-pointer' />

                    </td>
                  </div>


                </tr>

              ))}

          </tbody>

        </table>

      </div>
      <div className='w-full flex justify-center items-center mx-auto mt-4'>
        <CSVLink data={users}
      
          separator={";"}
          filename={"students-list.csv"}
          className='flex justify-center items-center w-[199px] h-[44px] 
         bg-[#26be08] rounded-[4px] text-[#FFFFFF]
            transition-all hover:scale-95 cursor-pointer'>
          Download data
        </CSVLink>

      </div>

      <TablePagination
        className='text-[#9FA2B4] font-Montserrat flex-col'
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default StudentsList

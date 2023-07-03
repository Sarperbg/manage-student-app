import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
import profile from '../assets/profile.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Users from '../components/Users';
import Pagination from '../components/Pagination';

const StudentsList = () => {


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [blogPosts, setBlogPosts] = useState(users);


  // const deleteData = (index) => {
  //   const updatedData = [...users];
  //   updatedData.splice(index, 1);
  //   setUsers(updatedData);
  // };
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const loadUsers = () => {
      axios.get("https://dummyjson.com/users").then((res) => {
        setUsers(res.data.users)
      })
    }
  })

  const deleteData = (index) => {
    const updatedData = [...users];
    updatedData.splice(index, 1);
    setUsers(updatedData);
  };

  function loadUsers() {
    axios.get(`https://dummyjson.com/users`)
      .then(res => setUsers(res.data.users))
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    loadUsers(0, 4, 0, "search")
  }

  const handleReset = () => {
    setUsers("");

  };
  useEffect(() => {
    loadUsers()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(res => {
        setUsers(res.data.users)
        setRecords(res.data.users)
      })
      .catch(err => console.log(err));
  }, []);

  const Filter = (event) => {
    setRecords(users.filter( f => f.firstName.toLowerCase().includes(event.target.value)))
  }

  return (
    <div className='w-full h-[300px] flex flex-col'>

      <div className='flex justify-between items-center mt-8 ml-4  border-8'>
        <div>
          <h3 className='font-Montserrat text-[22px] font-bold text-[#000000] flex items-center'>Students List</h3>

        </div>

        <form className='flex justify-center items-center mr-[5%]'>
          {search}
          <input
            onChange={Filter}
            type="text"
            placeholder="Search objects.."
            className="font-light bg-[#FFFFFF] text-gray-700  text-[14px] flex justify-center m-4 w-[212px] h-[37px]
            rounded-[8px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"
          />
          <Link to="add-user"
            className='w-[199px] h-[44px] flex justify-center items-center bg-[#FEAF00] rounded-[4px] text-[#FFFFFF]'>ADD NEW STUDENT</Link>

        </form>

      </div>

      <div>
        <table className="mx-auto text-center overflow-hidden mt-8 border border-black">
          <thead
            className="border-b">
            <tr className='text-[#ACACAC]'>
              <th scope="col" className="text-sm font-medium px-6 py-4 ">
                Picture
              </th>

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
              {users && <button className="flex justify-center items-center font-bold mt-1 text-sm  py-4 px-4 bg-red-800 rounded-xl w-24 h-10"

                onClick={() => handleReset()}> Delete All
              </button>}

            </tr>
          </thead>


          <tbody>


            {users && users.map((users, index) => (


              <tr key={index} className="bg-white border-b ">

                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  <img src={profile} />

                </td>
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
                <div className=''>

                  <td className='flex whitespace-nowrap text-lg font-light items-center mt-7 space-x-4'>
                    <Link to={`/users/${users.id}`} className='text-[#FEAF00] cursor-pointer'>
                      View
                    </Link>


                    <Link 
                    to= "/students/edit-user" size={19} className='text-[#FEAF00] cursor-pointer'>
                      <BiEditAlt />
                    </Link>

                    <AiOutlineDelete onClick={(index) => deleteData(index)} size={19} className='text-[#FEAF00] cursor-pointer' />

                  </td>
                </div>

              </tr>

            ))}

          </tbody>
        </table>



      </div>
     

    </div>
  )
}

export default StudentsList

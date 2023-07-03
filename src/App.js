import  {useEffect, useState} from "react"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'
import User from "./pages/user/User";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";

function App() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user)
      } else {

      }
    });
  }, [])
  return (
    <div className="">



      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard users={users} />} />
        <Route path="/students" exact element={<Students />} />
        <Route path="/users/:id" exact element={<User />} />
        <Route path="/students/add-user" exact element={<AddUser />} />
        <Route path="/students/edit-user" exact element={<EditUser/>} />

      </Routes>
      <ToastContainer
      className="flex bg-emerald-900 w-24 h-24 absolute top-0 right-20"
      position='top-center'
      autoClose="5000"
      theme='light'
      />

    </div>
  );
}

export default App;

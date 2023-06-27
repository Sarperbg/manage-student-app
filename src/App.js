import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Home" exact element={<Home/>} />

        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/students" exact element={<Students/>} />

      </Routes>
  
    </div>
  );
}

export default App;

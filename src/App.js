import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth'
import Navbar from './Pages/Shared/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>

    </div>
  );
}

export default App;


import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { LiaCogSolid } from "react-icons/lia";
import ThemeSettings from './components/ThemeSettings';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Ecommerce from './Pages/Ecommerce';
import Line from './Pages/Line';
import AreaChart from './Pages/AreaChart';
import BarChart from './Pages/BarChart';
import PieChart from './Pages/PieChart';
import RadialBar from './Pages/RadialBar';
import {  useStateContext } from './Contexts/ContextProvider';
import SignUp from './Pages/Auth/SignUp';
import LogIn  from './Pages/Auth/LogIn';
import ForgotPassword  from './Pages/Auth/ForgotPassword';
import LogOut from './Pages/Auth/LogOut';
import ProtectedRoute from './Pages/Auth/ProtectedRoute';



function App() {

  const { themeSettings, setThemeSettings ,currentColor, currentMode } = useStateContext()
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''} style={{backgroundColor: currentMode === 'Dark' ? '#000000' : '#ffffff', height: "100vh"}}>
      <BrowserRouter>
      <div className='fixed bottom-4 right-4 bg-[#008cff]  z-50 w-12 h-12  flex-center rounded-xl cursor-pointer' onClick={() => setThemeSettings(true)} style={{backgroundColor:currentColor}} >
      <LiaCogSolid className='text-4xl text-white  animate-[spiner_3s_linear_infinite] '  />
        </div>
        
      <div>
      {themeSettings && (<ThemeSettings />)}
      </div>
  
      <div >
        <Sidebar  />
      </div>

      <div >
        <Navbar  />
      </div>
        
        <Routes>
          {/* dashboard  */}
          <Route path="/" element={(<ProtectedRoute><Ecommerce /></ProtectedRoute>  )} />
          <Route path="/ecommerce" element={(<Ecommerce />)} />

          {/* Charts */}
          <Route path="/line" element={(<Line />)} />
          <Route path="/area" element={(<AreaChart />)} />
          <Route path="/bar" element={(<BarChart/>)} />
          <Route path="/pie" element={(<PieChart/>)} />
          <Route path="/radial" element={(<RadialBar/>)} />
        
          {/* Authentication */}
          <Route path='/sign up' element={<SignUp/>} />
          <Route path='/sign in' element={<LogIn />} />
          <Route path='/log out' element={<LogOut />} />
          <Route path='/forgot password' element={<ForgotPassword />} />
          </Routes>
        
      </BrowserRouter>
   

    </div>
  )
}

export default App

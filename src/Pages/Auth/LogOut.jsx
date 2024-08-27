import { useState } from "react"
import { useAuthContext } from "../../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"


import logo from '/images/logo-icon.png'

import { FaFacebookF ,  FaTwitter , FaLinkedinIn  } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LogOut = () => {

  const { currentUser, logOut } = useAuthContext()
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLogOut = async () => {
      setError("")
    try {

      await logOut()
      navigate("/sign in")
    }catch{
      setError("failed to log out ")
    }
  }

  const socail = [
    {
      icon: <FaFacebookF />,
      backgroundcolor: "#0976b4"
    },
    {
      icon: <FaTwitter />,
      backgroundcolor: "#55acee"
    },
    {
      icon:<IoLogoGoogle /> ,
      backgroundcolor: "#e52d27" 
    },

    {
    icon: <FaLinkedinIn /> ,
    backgroundcolor: "#0976b4" 
    },
]

  return (
    <div className=" bg-[#f7f7ff] dark:bg-main-dark-bg duration-1000 h-full pt-20">
      {error && <h1 className='bg-[#f8d7da] text-[#58151c] text-start p-4 px-8  mt-4  rounded-lg  w-full '>{ error}</h1>}
      <div className='container mx-auto w-[80%] sm:w-[40%]  sm:p-10  p-10  bg-[#ffffff] dark:bg-secondary-dark-bg dark:text-white  dark:border-[1px] dark:border-[#2d3234] duration-1000  rounded-xl shadow-md ' >
        <div className='flex justify-center items-center flex-col'>
        <img src={logo} className='w-[15%] h-[15%]' />
          <h1 className='text-[#32393f] dark:text-white duration-1000  text-xl font-medium my-2'>Rocker Admin</h1>
          <div className="flex gap-2">
          <h1 className="font-bold">Email: </h1> {currentUser && currentUser.email}
          </div>
            
        </div>
        <form>
          <div className='mt-4 text-center'>
            <button className='bg-[#008cff] w-[40%] p-2 rounded-lg text-white md:text-lg font-medium' onClick={handleLogOut}>Log Out</button>
            <p className='mt-4'>Don't have an account yet?  <Link to="/sign up" className='text-[#008cff] cursor-pointer'>Sign Up here</Link></p>
          </div>
        
          <div className='text-center' > <span className='text-[#cbcbcb] bg-[#fff] dark:bg-secondary-dark-bg duration-1000  text-[12px] relative top-[10px]'>OR SIGN UP WITH EMAIL</span>
          <hr className="dark:border-[1px] dark:border-[#2d3234] duration-1000 "/>
          </div>
  
          <div className='mt-8 '>
          <ul className='flex justify-center gap-3'>
              {socail.map((item, index) => (
                <li key={index} className='w-9 h-9 flex justify-center items-center text-white rounded-xl cursor-pointer' style={{backgroundColor: item.backgroundcolor}}><a>{ item.icon}</a></li>
            ))}
          </ul>
          </div>
          </form>
      </div>
      
    </div>

  )
}

export default LogOut
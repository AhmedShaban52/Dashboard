import { useRef, useState } from 'react';
import logo from '/images/logo-icon.png'

import { FaFacebookF ,  FaTwitter , FaLinkedinIn  } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/AuthContext';

const Signup = () => {
  const { logIn } = useAuthContext()

  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const location = useLocation();
  const redirectPath = location.state?.pah || "/"


  const emailRef = useRef();
  const passwordRef = useRef();


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
    
 
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      try {
        setError("")
        setLoading(true)
        await logIn(emailRef.current.value, passwordRef.current.value);
        navigate(redirectPath, {replace: true})
      } catch {
        setError("Faild to create an account")
      }
     setLoading(false)
    }
  return (
    <div className="bg-[#f7f7ff] dark:bg-main-dark-bg text-black  dark:text-white  py-24 ">
    <div className='container mx-auto w-[85%] sm:w-[50%] p-6 sm:p-10  bg-[#ffffff] dark:bg-secondary-dark-bg  dark:border-[1px] dark:border-[#2d3234] rounded-xl shadow-md ' >
      <div className='flex justify-center items-center flex-col'>
      <img src={logo} className='w-[15%] h-[15%]' />
        <h1 className='text-[#32393f] dark:text-white text-xl font-medium my-2'>Rocker Admin</h1>
        <p>Please log in to your account</p>
        {error && <h1 className='bg-[#f8d7da] text-[#58151c] text-start p-4 px-8  mt-4  rounded-lg  w-full '>{ error}</h1> }
      </div>
      <form onSubmit={handleSubmit}>

        <div className='flex flex-col text-start mt-4'>
        <label htmlFor='email'>Email  </label>
        <input type='email' id='email' placeholder='example@user.com' className='input-auth' ref={emailRef} />
        </div>

        <div className='flex flex-col text-start mt-4'>
        <label htmlFor='password'>password </label>
        <input type='password' id='password' placeholder='Enter Password' className='input-auth ' ref={passwordRef}  />
        </div>

        <div className='flex  justify-between  mt-4'>
            <div className='flex gap-2' >
                <input type='checkbox' />
                <p className='text-[14px] sm:text-[16px] '>Remember Me</p>
            </div>
        <Link to="/forgot password" className='text-[#008cff] text-[14px] sm:text-[16px] cursor-pointer'>Forgot Password</Link>
        </div>

        <div className='mt-4 text-center'>
          <button className='bg-[#008cff] w-full p-2 rounded-lg text-white text-lg font-medium' disabled={loading}>Log in</button>
          <p className='mt-4'>Don't have an account yet?  <Link to="/sign up" className='text-[#008cff] cursor-pointer'>Sign Up here</Link></p>
        </div>
      
        <div className='text-center' > <span className='text-[#cbcbcb] bg-[#fff] dark:bg-secondary-dark-bg text-[12px] relative top-[10px]'>OR SIGN UP WITH EMAIL</span>
        <hr className='dark:border-[1px] dark:border-[#2d3234]'/>
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

export default Signup
import { useRef, useState } from 'react';
import logo from '/images/logo-icon.png'


import { FaFacebookF ,  FaTwitter , FaLinkedinIn  } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/AuthContext';



const SignUp = () => {
const { signup } = useAuthContext()

  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

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

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch {
      setError("Faild to create an account")
    }
   setLoading(false)
  }
  return (
    <div className="bg-[#f7f7ff]  dark:bg-main-dark-bg text-black dark:text-white  duration-300   py-24 ">
      <div className='container mx-auto w-[85%] sm:w-[50%] p-6 sm:p-10  bg-[#ffffff] dark:bg-secondary-dark-bg dark:border-[1px] dark:border-[#2d3234]   rounded-xl shadow-md ' >
        <div className='flex-center flex-col'>
        <img src={logo} className='w-[15%] h-[15%]' />
          <h1 className='text-[#32393f] text-xl font-medium dark:text-white    my-2'>Rocker Admin</h1>
          <p className='text-wrap text-center '>Please fill the below details to create your account</p>
          {error && <h1 className='bg-[#f8d7da] text-[#58151c] text-start p-4 px-8  mt-4  rounded-lg  w-full '>{ error}</h1> }
        
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col text-start mt-8'>
          <label htmlFor='name'>Username </label>
          <input type='text' id='name' placeholder='Your Name' className='input-auth '  />
          </div>

          <div className='text-form'>
          <label htmlFor='email'>Email Address </label>
          <input type='email' id='email' placeholder='example@user.com' className='input-auth ' ref={emailRef}  />
          </div>

          <div className='text-form'>
          <label htmlFor='password'>password </label>
          <input type='password' id='password' placeholder='Enter Password' className='input-auth ' ref={passwordRef} />
          </div>

          <div className='text-form'>
          <label htmlFor='password-confirm'>password Confirmation</label>
          <input type='password' id='password-confirm' placeholder='Enter Password' className='input-auth ' ref={passwordConfirmRef} />
          </div>

          <div className='text-form'>
            <select className='border border-[#dee2e6] dark:border-0 bg-[#fff] dark:bg-[#212529]  px-4 py-2 rounded-lg mt-2 focus:border-[#86b7fe] outline-none ' >
              <option>india</option>
              <option>America</option>
              <option>United Kingdom</option>
            </select>
          </div>

          <div className='flex gap-2  mt-4'>
          <input type='checkbox' />
          <p >I read and agree to Terms & Conditions</p>
          
          </div>

          <div className='mt-4 text-center'>
            <button type="submit" className='bg-[#008cff] w-full p-2 rounded-lg text-white text-lg font-medium' disabled={loading}>Sign In</button>
            <p className='mt-4'>Already have an account?   <Link to="/sign in" className='text-[#008cff] cursor-pointer'>Sign In here</Link></p>
          </div>
        
          <div className='text-center' > <span className='text-[#cbcbcb] dark:border-0 bg-[#fff] dark:bg-secondary-dark-bg duration-700   text-[12px] relative top-[10px]'>OR SIGN UP WITH EMAIL</span>
          <hr className='dark:border-[1px] dark:border-[#2d3234]   '/>
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

export default SignUp
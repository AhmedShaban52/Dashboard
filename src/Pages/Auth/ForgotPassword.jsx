
import { useRef, useState } from 'react';
import logo from '/images/forgot-2.png'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/AuthContext';

const ForgotPassword = () => {
  const { resetPassword } = useAuthContext()
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  
  const emailRef = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value);
      setMessage("Check Your In Box")
    } catch {
      setError("Faild to Reset Password")
    }
  setLoading(false)
  }
  return (
    <div className="bg-[#f7f7ff] dark:bg-main-dark-bg text-black dark:text-white duration-700  py-24 ">
    <div className='container mx-auto w-[75%] sm:w-[50%] lg:w-[40%] p-6 sm:p-10  bg-[#ffffff] dark:bg-secondary-dark-bg dark:text-white dark:border-[1px] dark:border-[#2d3234]  rounded-xl shadow-md ' >
      <div className='flex-center flex-col pt-5'>
      <img src={logo} className='w-[25%] h-[25%]' />
      {error && <h1 className='bg-[#f8d7da] text-[#58151c] text-start p-4 px-8  mt-4  rounded-lg  w-full '>{ error}</h1> }
      {message && <h1 className='bg-[#d1e7dd] text-black text-center p-4 px-8  mt-4  rounded-lg  w-full '>{ message}</h1> }
      </div>
      <form onClick={handleSubmit}>
          <div className='flex flex-col text-start mt-8'>
            <h1 className='text-[#32393f] dark:text-white text-2xl font-medium'>Forgot Password?</h1>
            <p className='text-[#6c757d] text-[14px] text-wrap  mt-2 mb-8'>Enter your registered email ID to reset the password</p>
        <label htmlFor='email'>Email  </label>
        <input type='email' id='email' placeholder='example@user.com' className='input-auth ' ref={emailRef}  />
        </div>

        <div className='mt-4 text-center'>
          <button className='bg-[#008cff] w-full p-2 rounded-lg text-white text-lg font-medium' disabled={loading}>Send</button>
          <Link to="/sign up" className='mt-4 flex justify-center items-center cursor-pointer text-xl  '> <GoArrowLeft className='relative top-[2px] mr-1'/>  Back To Login </Link>  
        </div>
        </form>
    </div>
  </div>
  )
}

export default ForgotPassword
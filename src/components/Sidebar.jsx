import logo from '/images/logo-icon.png'

import { FaArrowLeft } from "react-icons/fa6";
import { links } from "../Data/Data";
import { useStateContext } from '../Contexts/ContextProvider';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { activeMenu, open, setOpen, currentColor } = useStateContext()
    
return (
    <div className={`w-[250px] h-screen bg-main-bg dark:bg-main-dark-bg text-[#e7e9ec] md:overflow-hidden overflow-auto md:hover:overflow-auto shadow-xl  fixed z-20 ${open ? 'left-0 ' : 'left-[-100%]'} duration-1000 `} >
    
    {activeMenu && <> 
        <div >
        <div className='flex items-center  p-5 dark:text-white text-[#008cff] ' >
        <img src={logo} className='w-[20%] h-[20%] text-white ' />
        <h1 className='text-xl  font-medium ml-3'>Rocker</h1>
        <FaArrowLeft className='ml-16 text-xl cursor-pointer text-[#008cff] ' onClick={() => setOpen(!open)}  />
    </div>
        <div className="m-3 p-2 ">
        {links.map((item, index) => (
            <div key={index}>
                <p className='text-gray-400 dark:text-gray-500 ' >{item.title}</p>
        
                {item.links.map((link, index) => (
                    <NavLink key={index} to={`/${link.name}`} className='flex items-center gap-5 link-name w-full   text-gray-700 dark:text-white  dark:hover:text-white hover:bg-gray-200 hover:bg-opacity-40  p-4 rounded-lg cursor-pointer duration-300' style={({ isActive }) => ({ backgroundColor: isActive ?  currentColor  : '', color : isActive ? "white" :"" })} >
                        {link.icon} {link.name}
                    </NavLink>
                ))}
                
        </div>
        ))}
    </div>
            </div>
        </>
    }
        </div>
    )
}

export default Sidebar
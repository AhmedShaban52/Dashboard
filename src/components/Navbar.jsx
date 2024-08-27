import { IoMenu, IoSearchOutline ,  IoSunnyOutline } from "react-icons/io5";
import Notification from "./Notification ";
import Cart from './Cart'
import { useStateContext } from "../Contexts/ContextProvider";
import Flags from "./Flags";
import Socail from "./Socail";
import UserProfile from "./UserProfile";

import { FiMoon } from "react-icons/fi";


const Navbar = () => {
 
  const {open, setOpen,currentColor , currentMode ,  ChangeTheme} = useStateContext()

  return (
    <div className="shadow-xl bg-main-bg dark:bg-main-dark-bg fixed top-0 z-10 w-full flex items-center p-2  dark:border-[1px] dark:border-[#2d3234] duration-1000">
      {open && (
        <div className="inset-0 z-10 overlay fixed"> </div>
      )}
      <div className="container mx-auto flex-between px-1 dark:hover:bg-opacity-10   ">
      <IoMenu className="w-10 h-10 p-2 cursor-pointer hover:bg-gray-200 hover:bg-opacity-40 dark:hover:bg-opacity-10 rounded-[50%] " onClick={() => setOpen(!open)} color={currentColor} />
        <div className="ml-5 hidden lg:block bg-main-bg dark:bg-secondary-dark-bg text-[#7b8288] dark:text-TextDark rounded-lg duration-1000">
          <form className="flex items-center p-[6px] gap-1 text-xl">
            <IoSearchOutline className="ml-2" />
            <input type="text" placeholder="Search" className="bg-transparent  focus:outline-none  search-nav" />
          </form>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex  items-center justify-center hover:bg-gray-200 hover:bg-opacity-40 dark:hover:bg-opacity-10 cursor-pointer w-10 h-10 rounded-[50%]" >
            <Flags/>
          </div>

          <div onClick={ ChangeTheme}  className="navbar-component ">
            {currentMode === "Light" ? (<IoSunnyOutline color={currentColor}/>) : (<FiMoon color={currentColor} />)}
          </div>

          <div className="navbar-component">
            <Socail/>
          </div>

          <div  className="navbar-component " >
            <Notification   />
          </div>

          <div  className="navbar-component " >
            <Cart   />
          </div>

          </div>
          </div>
          <div className="border-r-[1px] border-l-[1px] border-[#f0f0f0] dark:border-[#2d3234] duration-1000 ">
            <UserProfile/>
          </div>
    </div>
  );
};

export default Navbar;

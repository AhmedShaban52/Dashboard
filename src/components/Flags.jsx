import { useStateContext } from "../Contexts/ContextProvider";
import { flags } from "../Data/Data";
import flag from '/images/01.png';

const Flags = () => {
    const {  showFlags, setShowFlags, setShowSocial, setNotification, setCartShow , setProfile } = useStateContext()
    
    const handleToggleFlags = () => {
        setShowFlags(!showFlags);
        setShowSocial(false); 
        setNotification(false)
        setCartShow(false)
        setProfile(false)
      };
  return (
    <div onClick={handleToggleFlags} >
    <img src={flag} className="w-[22px] h-[22px]" />
    {showFlags && (
      <div className="relative">
        <ul className="absolute bg-white dark:bg-main-dark-bg  top-8 right-[-30px] rounded-xl h-[280px] w-[150px] py-3 px-1 dropdown duration-1000 border-dark">
          {flags.map((flag, index) => (
            <li key={index} className="flex items-center  gap-3 p-1  hover:bg-gray-200 hover:bg-opacity-40  dark:text-[#303337] dark:hover:text-white dark:hover:bg-[#303337]  cursor-pointer duration-1000" >
              <img src={flag.img} className="w-[22px] h-[22px]" />
              <span className="dark:text-TextDark">{flag.title}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default Flags
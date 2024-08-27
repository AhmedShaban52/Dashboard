import { useStateContext } from "../Contexts/ContextProvider";
import { IoGridOutline } from "react-icons/io5";
import { socail } from "../Data/Data";

const Socail = () => {

    const { setShowFlags, showSocial,  setShowSocial ,setNotification , setCartShow ,  setProfile , currentColor} = useStateContext()
    const handleToggleSocial = () => {
        setShowSocial(!showSocial);
        setShowFlags(false); 
        setNotification(false)
        setCartShow(false)
        setProfile(false)
      };
  return (
    <div onClick={handleToggleSocial}  >
        <IoGridOutline color={currentColor} />
        {showSocial && (
          <div className="relative">
            <ul className=" fixed sm:absolute w-full sm:w-[280px] z-50 bg-white top-16 sm:top-10 right-0 sm:right-[-40px] py-3 px-2 rounded-xl dark:bg-main-dark-bg dark:text-gray-400   duration-1000 dropdown-after  border-dark ">
              <div className="grid grid-cols-3 h-[300px] w-full sm:w-[280px] overflow-auto">
                {socail.map((item, index) => (
                  <li key={index} className="flex items-center flex-col gap-3 py-2 hover:bg-[#f8f9fa] dark:hover:bg-[#32363a] rounded-2xl cursor-pointer duration-1000 " >
                    <img src={item.img} className="w-[28px] h-[28px]" alt={item.title} />
                    <span className="font-medium text-[12px]">
                      {item.title}
                    </span>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
  )
}

export default Socail
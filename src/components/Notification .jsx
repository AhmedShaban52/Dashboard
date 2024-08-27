
import { GoBell } from "react-icons/go";
import { notifications } from "../Data/Data";

import  { useStateContext } from "../Contexts/ContextProvider";
const Notification = () => {
  
  const { notification, setNotification , setShowFlags, setShowSocial, setCartShow , setProfile , currentColor} = useStateContext()
  
  const handleToggle = () => {
    setShowFlags(false)
    setShowSocial(false)
    setCartShow(false)
    setProfile(false)
    setNotification(!notification)
  }
  return (
    <section>
      <div onClick={handleToggle} className="relative">
        <GoBell className="text-xl" color={currentColor}  />
        <span className="absolute top-[-10px] right-[-7px] w-[18px] h-[18px] text-white bg-[#f62718] text-[12px] font-medium rounded-[50%] flex items-center justify-center ">7</span>

          {notification && (
            <div  className="fixed sm:absolute  w-full sm:w-[350px] top-16 sm:top-12  right-0  md:right-[-30px] py-2  rounded-xl bg-white dark:bg-main-dark-bg dark:text-[#e4e5e6] Notification-after border-dark duration-300  ">
              
            <div className="flex-between px-4 border-b-[1px] border-[#ededed] border-bottom-dark duration-1000  py-3">
              <h1 className="font-medium">Notifications</h1>
              <p className="text-[#008cff]  py-[2px] px-2 bcakground-color rounded-md">8 NEW</p>
              </div>
                <div className="overflow-auto   sm:w-[350px] h-[400px]">
                  {notifications.map((item, index) => (
                    <div key={index} className="flex py-3 px-3 border-b-[1px] border-[#ededed] border-dark online relative">
                      <img src={item.img} className="w-[12%] h-[12%]  rounded-[50%] " />
                      <div className=" w-full  ml-4">
                        <a className="flex-between   ">
                          <span className="text-[14px] text-[#212529] dark:text-[#e4e5e6] duration-1000 font-medium">{item.title}</span> 
                          <span className="text-[#818189] text-[12px] font-medium font-family ">{item.time}</span>  
                        </a>
                        <p className="text-[#818189] text-[13px]">{item.msg}</p>
                      </div>
                    </div>
                  ))}
                  </div>
                  <button className="bg-[#008cff] text-white w-full rounded-lg py-2 px-3">
                  View All Notification
                </button>
              </div>
      )}
      </div>
      
    </section>
  )
}

export default Notification 







import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../Contexts/ContextProvider";
import { cart } from "../Data/Data";
const Cart = () => {
  const { setNotification , setShowFlags, setShowSocial, cartShow,setCartShow, setProfile , currentColor } = useStateContext()
  
  const handleToggle = () => {
    setShowFlags(false)
    setShowSocial(false)
    setNotification(false)
    setProfile(false)
    setCartShow(!cartShow)
  }
  return (
    <div onClick={handleToggle} className="relative" >
      <AiOutlineShopping className="text-xl" color={currentColor}/>
      <span className="absolute top-[-10px] right-[-8px] w-[18px] h-[18px] text-white bg-[#f62718] text-[12px] font-medium rounded-[50%] flex-center ">8</span>
      <div className="relative">
      {cartShow && (
        <div className="fixed sm:absolute z-50 w-full sm:w-[380px] top-16 sm:top-8 right-0 sm:right-[-30px] py-2  rounded-xl bg-white dark:bg-main-dark-bg dark:text-[#e4e5e6] border-dark duration-1000 Notification-after   ">
        <div className="flex-between gap-40 px-4 border-b-[1px] border-[#ededed]  dark:border-b-0 py-3 duration-300">
          <h1 className="font-medium font-family text-[18px] text-[#1c1b1b] dark:text-[#e4e5e6]  duration-1000 ">My Cart</h1>
          <p className="text-[#008cff] py-[2px] px-2 bcakground-color rounded-md">10 Items</p>
          </div>
            <div className="overflow-auto w-full  sm:w-[380px] h-[350px]">
              {cart.map((item, index) => (
                <div key={index} className="flex p-3 border-b-[1px] border-[#ededed] dark:hover:bg-[#303337] border-dark duration-1000 ">
                  <div className="w-[18%] h-[18%]  rounded-[50%] p-1 cart-background ">
                    <img src={item.img}   />
                  </div>
                  <div className=" w-full  ml-4">
                    <a className="flex-between  ">
                      <span className="text-[14px] text-[#212529] font-medium dark:text-[#e4e5e6] duration-1000">{item.title} </span> 
                      <span className="  font-medium font-family flex items-center gap-5 dark:text-[#818189] ">${item.price} <item.icon/></span> 
                      
                    </a>
                    <p className="text-[#818189] ">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5">
            <p className="flex items-center justify-between my-2 font-medium font-family text-xl text-[#1c1b1b] dark:text-[#e4e5e6] duration-1000">Total <span>$489.000</span> </p>
              <button className="bg-[#008cff] text-white w-full rounded-lg py-2 px-3">
              Check Out
                </button>
            </div>
      </div>
  )}
  </div>
    </div>
  )
}

export default Cart
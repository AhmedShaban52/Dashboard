import { useStateContext } from "../Contexts/ContextProvider";
import { themeColors } from "../Data/Data"
import { BsCheck } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";


const ThemeSettings = () => {
  const { currentColor, setColor , setThemeSettings , setMode, currentMode } = useStateContext()
  

  return (
      <div className="dark:bg-main-dark-bg text-black dark:text-white duration-1000   w-72 fixed  z-50 right-0 top-0 " >
      <div className="h-screen p-5 relative bg-[#ffffff] dark:bg-secondary-dark-bg dark:text-white dark:border-[1px] dark:border-[#2d3234] duration-1000  ">
        <div className="flex-between">
        
        <h1 className="font-semibold text-xl">Theme Settings    </h1>
        <AiOutlineClose className={"hover:text-[#737373]  cursor-pointer  hover:drop-shadow-lg hover:bg-light-gray w-8 h-8 p-2 rounded-[50%] relative  "} onClick={() => setThemeSettings(false)}/>
        </div>
        <div>
          <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer mt-4" onChange={setMode} checked={currentMode === 'Light'} />
          <label className=" ml-2 cursor-pointer" htmlFor="light">
          Light
          </label>
          
        </div>
        <div>
          <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={setMode} checked={currentMode === 'Dark'} />
          <label className=" ml-2 cursor-pointer" htmlFor="dark">
          Dark
          </label>
          
        </div>

        <div className="mt-5 border-t-[1px] dark:border-[#2d3234] " >
          <h1 className="font-semibold text-xl mt-3">Theme Colors</h1>
          <div className="flex gap-2">
          {themeColors.map((item, index) => (
            <div key={index} className="relative mt-2 cursor-pointer flex  gap-5 items-center">
              <button  type="button" className="h-8 w-8  rounded-full cursor-pointer" style={{ backgroundColor: item.color }} onClick={() => setColor(item.color)}>
                  <BsCheck className={`ml-1 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}   />
              </button>
            </div>
        ))}
          </div>
    
        </div>
        </div>
      </div>
  )
}

export default ThemeSettings
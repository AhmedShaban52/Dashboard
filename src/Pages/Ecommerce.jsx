
import { useStateContext } from "../Contexts/ContextProvider";
import { Statitacs, cards } from "../Data/Data";
import { ResponsiveBar } from '@nivo/bar'

import TanStackTable from "../components/Charts/TanStackTable";
import Choropleth from "../components/Choropleth";
import PieChart from "./PieChart";
import BarChart from "./BarChart";


const Ecommerce = () => {
    return (
    <div className="text-black pt-20 container mx-auto px-3 dark:bg-secondary-dark-bg  duration-700 ">
            <div className=" gap-5  grid-element">
                {Statitacs.map((item, index) => (
                    <div key={index} className="p-4 flex justify-between items-center  shadow-xl  rounded-xl  dark:bg-main-dark-bg duration-700" style={{ borderLeft: `4px solid ${item.color}` }}>
                        <div className="flex flex-col text-[#6c757d] dark:text-[#a8adb0]">
                        <h1 className="font-normal" >{item.name}</h1>
                        <span className="text-2xl font-medium my-1" style={{color : item.color}}>{ item.total}</span>
                        <span className="text-[13px]">{item.info}</span>
                        
                        </div>
                        <div className="w-14 h-14 flex justify-center items-center  rounded-[50%]" style={{background: item.backGround }}>
                    <span className="text-2xl text-white">{item.icon}</span> 
                </div>
            </div>
        ))}
    </div>

    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 ">
        <BarChart/>
    <div>
        <PieChart/>
    </div>
    </div>
    
    <div className="p-2 min-h-screen mt-5  dark:bg-main-dark-bg rounded-xl duration-700"  style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4)" }}>
        <TanStackTable />
    </div>
    <div className="gap-4 grid-element">
    <div className="overflow-hidden " >
        <Choropleth />
    </div>
    <div className=" grid grid-cols-1 gap-5 p-5 lg:mt-5 rounded-xl dark:bg-main-dark-bg dark:border-[1px] dark:border-[#2d3234] duration-700 " style={{ boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.4) " }}>
        {cards.map((item, index) => (
            <div key={index} className="p-4  flex-between  shadow-xl  rounded-xl bg-white  dark:bg-main-dark-bg border dark:border-[1px] dark:border-[#2d3234] duration-700" >
                <div className="flex flex-col text-[#6c757d] dark:text-[#a8adb0]">
                <h1 className="font-normal ">{item.name}</h1>
                <span className="text-2xl font-medium my-1" style={{color : item.color}} >{ item.total}</span>
                <span className="text-[13px]">{item.info}</span>
                </div>
                <div className="w-14 h-14 flex-center  rounded-xl" style={{background: item.backGround }}>
                    <span className="text-2xl text-white">{item.icon}</span> 
                </div>
            </div>
        ))}
    </div>
            
    </div>
    </div>
)
}

export default Ecommerce
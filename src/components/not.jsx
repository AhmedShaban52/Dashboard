import { GoBell } from "react-icons/go";
import { notifications } from "../Data/Data";
import { useStateContext } from "../Contexts/ContextProvider";

const Notification = () => {
  const { notification, setNotification, setShowFlags, setShowSocial, setCartShow, setProfile, currentColor } = useStateContext();

  const handleToggle = () => {
    setShowFlags(false);
    setShowSocial(false);
    setCartShow(false);
    setProfile(false);
    setNotification(!notification);
  };

  return (
    <section>
      <div onClick={handleToggle} className="relative">
        <GoBell className="text-xl" color={currentColor} />
        <span className="absolute top-[-10px] right-[-7px] w-[18px] h-[18px] text-white bg-[#f62718] text-[12px] font-medium rounded-[50%] flex items-center justify-center">
          7
        </span>

        {notification && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-main-dark-bg dark:text-[#e4e5e6] rounded-xl w-full h-full md:w-3/4 md:h-3/4 overflow-auto relative">
              <div className="flex items-center justify-between p-4 border-b border-[#ededed] dark:border-[#3e3e3e]">
                <h1 className="font-medium">Notifications</h1>
                <p className="text-[#008cff] py-[2px] px-2 bg-[#e0f7ff] rounded-md">8 NEW</p>
              </div>
              <div className="p-4 overflow-auto h-[calc(100%-120px)]">
                {notifications.map((item, index) => (
                  <div key={index} className="flex py-3 border-b border-[#ededed] dark:border-[#3e3e3e]">
                    <img src={item.img} className="w-[15%] h-[15%] rounded-full" alt="notification" />
                    <div className="ml-4 w-full">
                      <div className="flex justify-between">
                        <span className="text-[14px] text-[#212529] dark:text-[#e4e5e6] font-medium">{item.title}</span>
                        <span className="text-[#818189] text-[12px]">{item.time}</span>
                      </div>
                      <p className="text-[#818189] text-[13px]">{item.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-[#008cff] text-white w-full py-2 px-3 rounded-b-lg">
                View All Notifications
              </button>
              <button
                onClick={handleToggle}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-400"
              >
              
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notification;

import { useStateContext } from '../Contexts/ContextProvider'
import { userProfile } from '../Data/Data'
import user from '/images/avatar-2.png'

const UserProfile = () => {
    const { setNotification, setShowFlags, setShowSocial, setCartShow, Profile, setProfile } = useStateContext()
    
    const handleToggle = () => {
        setShowFlags(false)
        setShowSocial(false)
        setCartShow(false)
        setNotification(false)
        setProfile(!Profile)
    }
return (
    <div className='flex-center gap-3  relative cursor-pointer ' onClick={handleToggle}>
    <img src={user} className='w-[40%] h-[40%] md:w-[22%] md:h-[22%] rounded-[50%]' />
    <div className='hidden md:block'>
        <h1 className='text-lg font-medium  dark:text-TextDark'>Pauline Seitz</h1>
        <p className='text-[14px] text-[#747474] dark:text-[#b3b3b3]'>Web Designer</p>
    </div>
    <div className='relative'>
            {Profile && (
                <ul className=' absolute  top-10 right-0 py-2 px-[0.5px] bg-white dark:bg-main-dark-bg   rounded-xl w-[160px] user-after '>
                {userProfile.map((item, index) => (
                    <li key={index} className={`flex items-center text-center gap-2 p-2  hover:bg-[#f8f9fa] dark:text-[#acafb3] dark:hover:bg-[#32363a] user-after  ${index === 5 ? "border-t-[1px] border-[#ededed]  mt-3" :""} `} > <span className='text-[16px] '>{item.icon}</span>   <span className='font-[400] text-[#212529] dark:text-[#acafb3]'>{ item.title}</span> </li>
        ))}
        </ul>
    )}
    </div>
</div>
)
}

export default UserProfile
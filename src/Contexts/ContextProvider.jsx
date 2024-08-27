import { createContext, useContext, useState } from "react";


const StateContext = createContext()

const initialState = {
    cart: false,
    notification:false,
}

export const ContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState);
    const [showFlags, setShowFlags] = useState(false);
    const [showSocial, setShowSocial] = useState(false);
    const [notification, setNotification] = useState()
    const [cartShow, setCartShow] = useState()
    const [Profile, setProfile] = useState()
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode"));
    const [themeSettings, setThemeSettings] = useState(false)

    
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const ChangeTheme = () => {
        setCurrentMode(currentMode === 'Light' ? 'Dark' : 'Light');
        localStorage.setItem('themeMode', currentMode === 'Light' ? 'Dark' : 'Light');
    };
    return (
        <StateContext.Provider value={{open, setOpen, activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, notification, setNotification, showFlags,setShowFlags, showSocial, setShowSocial, cartShow,setCartShow , Profile, setProfile, currentColor,currentMode, setCurrentColor, setCurrentMode , setColor, setMode , themeSettings, setThemeSettings,  ChangeTheme }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () =>  useContext(StateContext);
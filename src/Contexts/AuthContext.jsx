import { createContext, useContext, useEffect, useState } from "react";


import { auth } from '../Firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged , sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

 
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };
    
  const logOut = () => {
      signOut(auth)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const resetPassword = (email) => {
   return sendPasswordResetEmail(auth, email)
  }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);
  
    return (
        <AuthContext.Provider value={{ currentUser, signup , logOut , logIn , resetPassword  }} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
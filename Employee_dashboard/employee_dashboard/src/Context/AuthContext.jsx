import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=> {
    const [isAuth, setIsAuth] = useState(false)

    const handleLogin = ()=> {
        setIsAuth(true)
    }

    const handleLogout = ()=> {
        setIsAuth(false)
    }

    return(
        <AuthContext.Provider value={{isAuth, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
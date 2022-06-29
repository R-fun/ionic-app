import { createContext,useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [getAuth,setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ setAuth,getAuth  }}>
            {children}
        </AuthContext.Provider>
    )
}   

export default AuthContext;
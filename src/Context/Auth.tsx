import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }:{children:ReactNode}) {
    const [user, setUser] = useState(null);

    // const  navigate = useNavigate();
    const onLoginSuccess = (userData:any) => {
        setUser(userData); // userData should include role and token
        localStorage.setItem('user', JSON.stringify(userData)); // Persist user in local storage
    };

    const logout=()=>{
        setUser(null);
        localStorage.removeItem('user');
    }
    useEffect(() => {
        const user_in_local_storage = localStorage.getItem('user')
        console.log(user_in_local_storage)
        if(user_in_local_storage){
            const storedUser = JSON.parse(user_in_local_storage);
            console.log(storedUser)
            if (storedUser){ 
                setUser(storedUser); // Load user on app start
                window.history.back()
            }
        }   
        
    }, []);

    return (
        <AuthContext.Provider value={{ user, onLoginSuccess, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

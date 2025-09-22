import React, {createContext, useContext, useState, ReactNode} from "react";


type UserData = {
    uid: string;
    name:string;
    role:string;
    email:string;
};

type AuthContextType = {
    user:UserData | null;
    setUser: (user: UserData | null) => void;

};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<UserData | null>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("UseAuth deve ser usado dentro de AuthProvider");
    return context;
};
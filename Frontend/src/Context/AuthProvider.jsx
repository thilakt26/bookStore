import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialUser = localStorage.getItem("users");
    const [authUser, setAuthUser] = useState(
        initialUser ? JSON.parse(initialUser) : undefined // Use null or an empty object/array as a default value
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};

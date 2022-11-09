import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState();

    // createUserWithEmailAndPassword
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signInWithEmailAndPassword
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    const authInfo={
        user,
        createUser,
        login
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
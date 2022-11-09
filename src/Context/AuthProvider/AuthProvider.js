import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
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

    // Google SignIN
    const googleSignup=()=>{
        return signInWithPopup(auth,provider);
    }


    const authInfo={
        user,
        createUser,
        login,
        googleSignup
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
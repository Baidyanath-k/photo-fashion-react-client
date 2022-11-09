import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    // logOut
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            // console.log('Auth state change',currentUser)
        })
        return()=>{
            unscribe()
        }
    } , [])


    const authInfo={
        user,
        createUser,
        login,
        googleSignup,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
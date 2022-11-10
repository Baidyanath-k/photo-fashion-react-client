import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true)

    // createUserWithEmailAndPassword
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signInWithEmailAndPassword
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Google SignIN
    const googleSignup=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    // logOut
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect( ()=>{
        const unscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
            // console.log('Auth state change',currentUser)
        })
        return()=>{
            unscribe()
        }
    } , [])

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }


    const authInfo={
        user,
        createUser,
        login,
        googleSignup,
        logOut,
        updateUserProfile,
        setLoading,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth=getAuth(app);
const UserContext = ({children}) => {

  const [user,setUser]=useState({displayName:"Md.Helal Uddin"})
  const googleProvider=new GoogleAuthProvider();

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut=()=>{
   return signOut(auth);
  }

  const signInWithGoogle=()=>{
    return signInWithPopup (auth,googleProvider)
  }

  useEffect(()=>{
   const unSubscribe =onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      console.log(currentUser)
    })
   
    return ()=>{
      unSubscribe();
    }
  },[])
 
  const authInfo = {user,createUser,signIn,logOut,signInWithGoogle};
  return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>)
};

export default UserContext;

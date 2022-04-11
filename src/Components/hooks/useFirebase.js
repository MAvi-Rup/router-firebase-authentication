import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const useFirebase = ()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user)
        })
    },[])
    const signWithGoogle =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setUser(user)

        })
        .catch(eroor=>{
            console.error(eroor)
            setError(eroor)
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{

        })
    }
    return {signWithGoogle,user,setUser,handleSignOut,error}


}
export default useFirebase;
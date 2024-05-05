import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types'; 

export const AuthContext = createContext()
const auth = getAuth(app);

// social auth provider
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user function
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn function
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observer for current state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User', currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    // logout function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google sign-in
    const googleLogin = () => {
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
};
export default AuthProvider;
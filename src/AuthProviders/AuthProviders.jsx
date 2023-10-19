import { createContext, useEffect, useState } from "react";
import { app } from "../firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)

export const auth = getAuth(app)

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(user)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    })

    const createUser = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                return updateProfile(result.user, { displayName: name, photoURL: photoUrl })
            })
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Registration Success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Not cool'
                })
                console.error(error)
            })

    }

    const logOut = () => {
        signOut(auth)
            .then()
            .catch(error => {
                console.log(error)
            })
    }


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }





    const userInfo = {
        createUser,
        loading,
        user,
        logOut,
        logIn

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.object
};


export default AuthProviders;
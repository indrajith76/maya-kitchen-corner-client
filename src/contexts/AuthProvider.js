import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribed();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    googleSignIn,
    facebookSignIn,
    githubSignIn,
    signIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

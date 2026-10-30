import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase.config";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // update user
  const updateUser = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL }).then(
      () => {
        setUser({ ...auth.currentUser });
        setLoading(false);
      },
    );
  };

  // logout User
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // track current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

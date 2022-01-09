import type { User } from "firebase/auth";
import type { Context } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Router from "next/router";

const AuthContext: Context<any> = createContext({});

const useProvideAuth = () => {
  const [user, setUser]: [User | boolean, Function] = useState(false);

  const signOut = () =>
    auth.signOut().then(() => {
      setUser(false);
      Router.push("/");
    });

  const signUpWithEmailAndPassword = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      Router.push("/dashboard");
    });
  };

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      Router.push("/dashboard");
    });

  const signInWithGoogle = () =>
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userCredential) => {
        setUser(userCredential.user);
        Router.push("/dashboard");
      })
      .catch((error) => console.error(error));

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user ? user : false));
    return unsubscribe;
  }, []);

  return {
    user,
    signOut,
    signUpWithEmailAndPassword,
    signIn,
    signInWithGoogle,
  };
};

export const AuthProvider = ({ children }: any) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

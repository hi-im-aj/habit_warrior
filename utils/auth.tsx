import type { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth as firebaseAuth } from "@/lib/firebase";

const AuthContext = createContext({ user: null });

const useProvideAuth = () => {
  const [user, setUser]: [User | null, Function] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return {
    user,
  };
};

export const AuthProvider = ({ children }: any) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

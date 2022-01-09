import type { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

const AuthContext = createContext({
  user: false,
  signOut: undefined,
});

const useProvideAuth = () => {
  const [user, setUser]: [User | boolean, Function] = useState(false);

  const signOut = async () => {
    return auth.signOut().then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return unsubscribe;
  }, []);

  return {
    user,
    signOut,
  };
};

export const AuthProvider = ({ children }: any) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

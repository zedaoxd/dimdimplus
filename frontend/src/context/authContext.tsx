import { createContext, useState } from "react";
import { User } from "../@types";
import { login } from "../services/authService";
import {
  getAuthLocalStorage,
  removeAuthLocalStorage,
  setAuthLocalStorage,
} from "../storage";

type AuthContextData = {
  user: User | null;
  signIn: (data: Pick<User, "email" | "password">) => Promise<number>;
  signOut: () => void;
  isAuthenticated: () => boolean;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (userLogin: Pick<User, "email" | "password">) => {
    return await login(userLogin)
      .then((response) => {
        setUser(response.data.user);
        setAuthLocalStorage(response.data);
        return response.status;
      })
      .catch((error) => {
        return error.response.status;
      });
  };

  const signOut = () => {
    setUser(null);
    removeAuthLocalStorage();
  };

  const isAuthenticated = () => {
    const auth = getAuthLocalStorage();
    const token = auth?.token;
    if (!token) return false;

    const [, payload] = token.split(".");
    const payloadDecoded = JSON.parse(atob(payload));
    const exp = payloadDecoded.exp;
    const now = new Date().getTime() / 1000;

    if (exp < now) {
      signOut();
      return false;
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

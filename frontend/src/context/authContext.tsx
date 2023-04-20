import { createContext, useState } from "react";
import { User } from "../@types";
import { login } from "../services/authService";
import { setAuthLocalStorage } from "../storage";

type AuthContextData = {
  user: User | null;
  signIn: (data: Pick<User, "email" | "password">) => Promise<number>;
  signOut: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false;
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

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

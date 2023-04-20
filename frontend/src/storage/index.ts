import { User } from "../@types";

type Auth = {
  token: string;
  user: User;
};

export const setAuthLocalStorage = (auth: Auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const getAuthLocalStorage = (): Auth | null => {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
};

export const removeAuthLocalStorage = () => {
  localStorage.removeItem("auth");
};

import { User } from "../@types";

type Auth = {
  token: string;
  user: User;
};

export const setAuthLocalStorage = (auth: Auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

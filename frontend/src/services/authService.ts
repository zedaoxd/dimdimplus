import { AuthResponse, User } from "../@types";
import { api } from "./api";

export const signup = async (data: Omit<User, "id" | "roles">) => {
  return await api.post<AuthResponse>("/auth/register", data);
};

export const login = async (data: Pick<User, "email" | "password">) => {
  return await api.post<AuthResponse>("/auth/authenticate", data);
};

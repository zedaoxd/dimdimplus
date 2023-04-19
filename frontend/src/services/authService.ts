import { AuthResponse, User } from "../@types";
import { api } from "./api";

export const signup = async (data: Omit<User, "id">) => {
  return await api.post<AuthResponse>("/auth/register", data);
};

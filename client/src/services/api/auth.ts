import { IApiResponse } from "@/types/api";
import instance from "./instance";
import { IUser } from "@/types/user";

export const registerUser = (body: unknown) => instance.post<IApiResponse<IUser> & { token: string }>("/auth/register", body);
export const loginUser = (body: unknown) => instance.post("/auth/login", body);

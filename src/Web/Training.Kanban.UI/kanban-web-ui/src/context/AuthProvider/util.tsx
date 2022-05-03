import { Api } from "../../services/Api";
import { IUser } from "./types";

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("u");

    if(!json)
        return null;

        const user = JSON.parse(json);

        return user ?? null;
}

export async function LoginRequest (username: string, password: string){
    try{
        const request = await Api.post("login", {username, password});
        return request.data;
    }catch{
        return null;
    }
}
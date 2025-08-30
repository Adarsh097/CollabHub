import { axiosInstance } from "./axios";


export async function getSreamToken(){
    const response = await axiosInstance.get("/chat/token");
    return response.data;
}
import { StreamChat } from 'stream-chat';
import { STREAM_API_KEY, STREAM_SECRET_KEY } from './env.js';


const serverClient = StreamChat.getInstance(STREAM_API_KEY,STREAM_SECRET_KEY);

export const upsertStreamUser = async(userData)=>{
    try {
        await serverClient.upsertUser(userData);
        console.log("Stream user upserted:", userData.name);
    } catch (error) {   
        console.error("Error upserting stream user:", error);
    }
}

export const deleteStreamUser = async(userId)=>{
    try {
        await serverClient.deleteUser(userId);
        console.log("Stream user deleted:", userId);
    } catch (error) {
        console.error("Error deleting stream user:", error);
    }
}

export const generateStreamToken = (userId)=>{
    try {
        const userIdString = userId.toString();
        return serverClient.createToken(userIdString);
    } catch (error) {
        console.error("Error generating stream token:", error);
        return null;
    }
}
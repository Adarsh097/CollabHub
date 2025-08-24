import { generateStreamToken } from "../config/stream.js"

 const getStreamToken = async(req, res)=>{
    try {
        const token = await  generateStreamToken(req.auth.userId);
        if(!token){
            return res.status(500).json({error: "Could not generate token"});
        }
        return res.status(200).json({token});
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}


const ChatControllers = {
    getStreamToken,
}

export default ChatControllers;
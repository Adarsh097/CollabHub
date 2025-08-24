
 const protectRoute = (req, res, next) => {
    try {
        if(!req.auth().isAuthenticated){
            return res.status(401).json({error: "Unauthorized"});
        }
        next();
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}


const authMiddlwares = {
    protectRoute
}
export default authMiddlwares;
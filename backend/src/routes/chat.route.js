import express from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const ChatRouter = express.Router();

ChatRouter.get('/token',middlewares.authMiddleware.protectRoute,controllers.chatController.getStreamToken)
export default ChatRouter;

import "../instrument.mjs";
import express from "express";
import { serve } from "inngest/express";
import { NODE_ENV, PORT } from "./config/env.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import routes from "./routes/index.js";
import * as Sentry from "@sentry/node";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(clerkMiddleware()); //! req.auth will be available

app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/chat", routes.ChatRoutes);

Sentry.setupExpressErrorHandler(app);

const startServer = () => {
  try {
    if (NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();

export default app;

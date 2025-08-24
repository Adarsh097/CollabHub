import express from "express";
import { serve } from "inngest/express";
import { NODE_ENV, PORT } from "./config/env.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";

const app = express();
app.use(express.json());
app.use(clerkMiddleware()); //! req.auth will be available


app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
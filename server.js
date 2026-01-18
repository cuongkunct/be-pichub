import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rootRouter from "./src/routers/root.router.js";
import { errorMiddleware } from "./src/common/helper/error.helper.js";
import connectDB from "./src/common/mongoodb/database.js";
import { PORT } from "./src/common/contant/app.contant.js";

dotenv.config();

const app = express();

const PORT = PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  }),
);
connectDB();
// Routes
app.use("/api", rootRouter);

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Global Error Handler
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

export default app;

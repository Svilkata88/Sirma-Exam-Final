import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./mongoDB/db.js";
import homeRouter from "./routes/home.js";
import matchRouter from "./routes/matchRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile =
  process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev";
dotenv.config({ path: envFile });

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: ["http://localhost:3000", "https://yourfrontend.com"], // allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
    credentials: true, // allow cookies
  }),
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/", homeRouter);
app.use("/api/v1/matches", matchRouter);

// If db needed!
connectDB();

app.listen(PORT, () => {
  console.log(`🖥 🖥 🖥  Server is running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json()); // app.use(express.json()) is a middleware function in Express.js that parses incoming requests with JSON payloads. It is commonly used to handle JSON data sent in the body of HTTP requests, such as POST, PUT, or PATCH reuests.
app.use(cors()); // Allows requests from any origin (*).
app.use(cookieParser())

// db connection
connectDB();

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);

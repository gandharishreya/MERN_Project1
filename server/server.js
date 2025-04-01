import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from './routes/authRoutes.js'


import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js';

const app=express();
const port =process.env.PORT || 4000
connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))
/*app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));
*/

//API endpoints
app.get("/",(req,res)=>res.send("API working"));
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.listen(port, ()=> console.log(`Server started on PORT:${port}`));

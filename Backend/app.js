import express from "express";
import { dbConnection } from "./DataBase/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({path:"./config/config.env"});

app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests only from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));
// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     methods : ["POST"],
//     credentials : true,
// }))

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/api/v2/message", messageRouter);

dbConnection();

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });




export default app;
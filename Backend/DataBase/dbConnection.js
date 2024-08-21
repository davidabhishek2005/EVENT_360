import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"MERN_STACK_PROJECT"}).then(()=>{
        console.log("Connected to DataBase !");
    })
    .catch((err)=>{
        console.log("Error occured during Connecting to DataBase:",err);
    });
}


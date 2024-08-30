import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const  connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
        console.log(` \n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host} `);
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}
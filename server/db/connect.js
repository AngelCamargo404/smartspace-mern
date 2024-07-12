import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {});

        console.log(conn.connection.host);
    } catch (err) {
        console.log("ERROR MESSAGE: ", err.message);
    }
}

export default connectDB;
import mongoose from "mongoose";

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection successful!");
    } catch (error) {
        console.log("Connection failed!");
    }
}

export default connect;
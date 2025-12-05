import mongoose from "mongoose";


const connectDB = async(url) => {
    try {
        await mongoose.connect(url);
        console.log("CONNECTED TO THE DB")
    } catch (error) {
        consoe.log("Server error")
    }
}

export default connectDB;
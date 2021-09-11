import mongoose from "mongoose";


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connection to dataBase SECCESS");
    } catch (error) {
        console.error("connection to dataBase FAILED :", error.message)
    }
}
export { connectDb }
import dotenv from "dotenv"
import { connectDb } from "./config/db.js";
import { products } from "./data/products.js";
import { product } from "./models/product.js";

dotenv.config()
connectDb()
const importData = async () => {
    try {
        await product.deleteMany()
        await product.insertMany(products)
        console.log("inset product in database seccess");
    } catch (error) {
        console.log("failed to insert products in dataBase: ", error.message);
    }
}

importData()
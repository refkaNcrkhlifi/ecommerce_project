import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"
import productRouter from "./routes/products.js"
import cors from "cors"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/products", productRouter)

// app.use(express.urlencoded({ extended: true }))

connectDb()

const prot = process.env.NODE_PORT || 3100
app.listen(prot, () => console.log("lisning on port :", prot))
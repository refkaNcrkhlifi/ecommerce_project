import { product } from "../models/product.js";


export const getAllProducts = async (req, res) => {
    try {
        const products = await product.find()
        res.send(products)
    } catch (error) {
        console.error("failed to fetch products")
        res.status(500).send({ message: "server error" })
    }
}
export const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const Product = await product.findOne({ _id: id })
        res.send(Product)
    } catch (error) {
        console.error("failed to fetch product :", error.message)
        res.status(500).send({ message: "server error" })
    }
}
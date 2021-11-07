import axios from 'axios';


export const getProductDetails = async (id) => await axios.get(`products/${id}`)
export const getProducts = async () => await axios.get(`products`)
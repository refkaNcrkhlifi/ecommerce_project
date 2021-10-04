import axios from 'axios';


export const addToCart = async (id) => await axios.get(`products/${id}`)
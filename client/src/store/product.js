import { createSlice } from '@reduxjs/toolkit'
import * as postApi from '../api';

//  const localstorageElement = localStorage.getItem("ProductDetails") ? JSON.parse(localStorage.getItem("ProductDetails")) : {}
const localstorageElement = localStorage.getItem("productDetails") ? JSON.parse(localStorage.getItem("productDetails")) : {}
// Slice
const slice = createSlice({
    name: 'Product',
    initialState: [],
    reducers: {
        GET_PRODUCTS: (state, action) => {
            const { products } = action.payload
            return products
        },


    },
});
const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: localstorageElement,
    reducers: {
        GET_PRODUCT_DETAILS: (state, action) => {
            const { product } = action.payload
            return { ...product }
        },
    },
});

export default slice.reducer
export const productDetails = productDetailsSlice.reducer

// Actions
export const { GET_PRODUCTS } = slice.actions
export const { GET_PRODUCT_DETAILS } = productDetailsSlice.actions

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await postApi.getProducts()
        dispatch({
            type: GET_PRODUCTS,
            payload: { products: data }
        })
    } catch (error) {
        console.log("fetch data error ", error.message);
    }

}
export const addProductDetails = (product) => async (dispatch, getState) => {
    dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: { product }
    })
    localStorage.setItem("productDetails", JSON.stringify(getState().productDetails))

}

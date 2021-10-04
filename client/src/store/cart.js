import { createSlice } from '@reduxjs/toolkit'


const localstorageElement = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
// Slice
const slice = createSlice({
    name: 'CartItem',
    initialState: localstorageElement,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const item = action.payload
            const itemExsist = state.find((x) => x?._id === item?._id)
            if (itemExsist) {
                return state.map((x) => x?._id === item?._id ? { ...item, qte: x.qte + 1 } : x)
            } else state.push(item)
        },
        REMOVE_FROM_CART: (state, action) => {
            const id = action.payload
            return state.filter((x) => x?._id !== id)
        },
        ADD_QUANTITY: (state, action) => {
            const { id, qty } = action.payload
            return state.map((x) => x?._id === id ? { ...x, qte: qty } : x)
        },
        RESET_CART: (state, action) => {
            return []
        },

    },
});

export default slice.reducer

// Actions
const { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, ADD_QUANTITY } = slice.actions

export const addToCart = (item) => async (dispatch, getState) => {

    dispatch({
        type: ADD_TO_CART,
        payload: { ...item, qte: 1 }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart))

}
export const removeFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart))
}
export const addCquantity = (id, qty) => async (dispatch, getState) => {
    console.log("dispa==========");
    dispatch({
        type: ADD_QUANTITY,
        payload: { id, qty }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart))
}
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'

import product from "./product"
import { productDetails } from "./product"
import cart from "./cart"

const reducer = combineReducers({
    product, cart, productDetails
})
export default configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
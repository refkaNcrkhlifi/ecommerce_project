import { configureStore } from "@reduxjs/toolkit"
import reducer from "./product"
export default configureStore({ reducer })
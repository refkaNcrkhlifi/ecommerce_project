import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
    name: 'Product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const { question, response } = action.payload
            state[question] = response
            state.initialValue[question] = response
            state.reponseTab.push({ question, response })

        },

    },
});

export default slice.reducer

// Actions
export const { addProduct } = slice.actions

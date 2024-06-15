import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct(state, action){
            state.push(action.payload);
        },
        deleteProduct(state, action){
            return state.filter(product => product.id != action.payload.id);
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions;

export default cartSlice.reducer;
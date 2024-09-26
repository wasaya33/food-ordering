import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    quantity: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);  // Corrected 'prducts' to 'items'
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            return initialState;  // Return initial state to reset
        }
    }
});

export const { addProduct, reset } = cartSlice.actions;  // Use 'actions' instead of 'action'
export default cartSlice.reducer;  // Use 'reducer' instead of 'reducers'
    
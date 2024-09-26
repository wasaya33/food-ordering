import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './cartSlice'

export default configureStore({
    reducer:{
        cart: cartReducers,  
    },
});


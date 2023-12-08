import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slices/bank_Slice'
import product_Slice from './slices/product_Slice'
import cart_Slice from './slices/cart_Slice'

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    products: product_Slice,
    cart: cart_Slice,
  },
  devTools: true
})
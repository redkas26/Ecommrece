import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
    initialState: 1000,
    name: 'bankSlice',
    reducers: {
        widhdraw: (state, action) => {
            return state = state - action.payload
        },
        deposite: (state, action) => {
            return state = state + action.payload
        }
    }
})

export const {widhdraw, deposite} = bankSlice.actions;
export default bankSlice.reducer

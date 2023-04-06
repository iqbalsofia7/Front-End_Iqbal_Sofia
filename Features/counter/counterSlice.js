import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        value: 0
    },
    reducers: {
        incrementer(state){
            state.value+=1
        }
    }
})

export const { incrementer } = counterSlice.actions
export default counterSlice.reducer
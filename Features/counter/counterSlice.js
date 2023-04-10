import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        value: 0,
        cartItems: [],
        users: []
    },
    
    reducers: {
        incrementer(state, action ){
            const newItem = action.payload;
            const index = state.cartItems.findIndex((item) => item.title === newItem.title);
            if (index === -1) {
                state.cartItems.push(newItem);
                state.value+=1 
            }
        },
        supprimerPanier(state, action) {
            const title = action.payload
            const item = state.cartItems.find(item => item.title === title)
            if (item){
                const index = state.cartItems.findIndex(item => item.title === title)
                state.cartItems.splice(index, 1)
                state.value -=1
            }
            if (state.cartItems.length == 0) {
                state.value = 0
            }
        },
        toutVu(state, action){
            state.value = 0,
            state.cartItems = []
        }
    }
})

export const { incrementer, supprimerPanier, toutVu } = counterSlice.actions
export default counterSlice.reducer
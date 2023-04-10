import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        value: 0,
        cartItems: [],
        users: [],
        loggedIn: false,
        currentUser: null
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
        },
        setLoggedIn(state, action) { // réducteur pour mettre à jour le statut de connexion de l'utilisateur
            state.loggedIn = action.payload;
        },
        setCurrentUser(state, action) { // réducteur pour mettre à jour les informations de l'utilisateur connecté
            state.currentUser = action.payload;
        },
        clearCurrentUser(state) { // réducteur pour supprimer les informations de l'utilisateur connecté
            state.currentUser = null;
        },
        addUser(state, action) { // réducteur pour ajouter un utilisateur
            state.users.push(action.payload);
        }

    }
})

export const { incrementer, supprimerPanier, toutVu, setLoggedIn, addUser, setCurrentUser, clearCurrentUser } = counterSlice.actions
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {
        value: 0,
        cartItems: [],
        cartItems2: [],
        users: [],
        loggedIn: false,
        currentUser: null,
        valueFav: 0 
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
        incrementerFav(state, action ){
            const newItem = action.payload;
            const index = state.cartItems2.findIndex((item) => item.title === newItem.title);
            if (index === -1) {
                state.cartItems2.push(newItem);
                state.valueFav+=1 
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
        supprimerFav(state, action) {
            const title = action.payload
            const item = state.cartItems2.find(item => item.title === title)
            if (item){
                const index = state.cartItems2.findIndex(item => item.title === title)
                state.cartItems2.splice(index, 1)
                state.valueFav -=1
            }
            if (state.cartItems2.length == 0) {
                state.valueFav = 0
            }
        },
        toutVu(state, action){
            state.value = 0,
            state.cartItems = []
        },
                
        clear(state, action){
            state.valueFav = 0,
            state.cartItems2 = []
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

export const { incrementer, incrementerFav, supprimerPanier, supprimerFav, clear, toutVu, setLoggedIn, addUser, setCurrentUser, clearCurrentUser } = counterSlice.actions
export default counterSlice.reducer
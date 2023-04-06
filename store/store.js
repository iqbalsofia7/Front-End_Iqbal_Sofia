import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/counter/counterSlice.js";

export default configureStore({
    reducer: {
        counter: counterSlice
    }
})
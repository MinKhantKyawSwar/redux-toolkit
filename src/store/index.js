import { createSlice, configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";


const store =  configureStore({
    reducer : {
        counter : counterReducer, 
        auth : authReducer,
    }
});



export default store;

// 44:17
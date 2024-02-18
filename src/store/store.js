import { configureStore} from "@reduxjs/toolkit";
import homeSlice from "../store/homeSlice";

export const store = configureStore({
    reducer:{
        home:homeSlice
    },
})
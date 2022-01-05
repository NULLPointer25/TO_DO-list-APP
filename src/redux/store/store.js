import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducer/reducer";
import { useReducer } from "../reducer/loginreducer";

export default configureStore({
    reducer: {
        reducer: reducer,
        user: useReducer,
    },
});

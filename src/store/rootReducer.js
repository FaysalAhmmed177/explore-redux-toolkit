import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";

export const rootReducer = combineReducers({
   auth: authSlice.reducer
})
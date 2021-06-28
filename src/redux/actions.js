import { authSlice } from "./slice";
const { actions: slice } = authSlice;

//Login action

export const LoginAction = (phone) => (dispatch) => {
   dispatch(slice.setLogin(phone))
}
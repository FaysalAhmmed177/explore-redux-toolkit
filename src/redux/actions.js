import { authSlice } from "./slice";
const { actions: slice } = authSlice;

//Login action

export const LoginAction = (phone) => (dispatch) => {
   dispatch(slice.setLogin(phone));
}
export const LogoutAction = () => (dispatch) => {
   dispatch(slice.setLogout());
}
export const getDataAction = () => (dispatch) => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => dispatch(slice.setData(data)))
      .catch(err => console.log(err))
}
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, LogoutAction } from './redux/actions';

function App() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className="App">
      {auth.isAuth ?
        (<div>
          <h3>Welcome</h3>
          <p>{auth.phone}</p>
          <button onClick={() => dispatch(LogoutAction())} >Log out</button>
        </div>
        ) : (
          <div>
            <h3>Please Login.</h3>
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => dispatch(LoginAction(phone))}>Login</button>
          </div>)
      }
    </div>
  );
}

export default App;

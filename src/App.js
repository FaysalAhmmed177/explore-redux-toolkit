import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAction } from './redux/actions'

function App() {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  console.log("Phone:", phone);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Please Login.</h3>
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button onClick={dispatch(LoginAction(phone))}>Login</button>
      </header>
    </div>
  );
}

export default App;

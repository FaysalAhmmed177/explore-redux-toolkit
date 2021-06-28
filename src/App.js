import './App.css';
import Auth from './components/Auth';
import BasePage from './components/BasePage';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return (
    <div className="App">
      {auth.isAuth ?
        (
          <BasePage/>
        ) : (
          <Auth />
        )
      }
    </div>
  );
}

export default App;

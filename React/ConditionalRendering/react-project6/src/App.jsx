import './App.css';
import { useState } from 'react';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? (
        <LogoutBtn onClick={() => setLoggedIn(false)} />
      ) : (
        <LoginBtn onClick={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;

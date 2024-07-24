import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>General</h2>
        <div>
          <label htmlFor="first-name">First Name </label>
          <input type="text" id="first-name" />
        </div>
        <div>
          <label htmlFor="last-name">Last Name </label>
          <input type="text" id="last-name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone-number">Phone number </label>
          <input type="tel" id="phone-number" />
        </div>
      </div>
    </>
  );
}

export default App;

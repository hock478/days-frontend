import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={SignIn()}/>
          <Route path="/signup" element={SignUp()}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

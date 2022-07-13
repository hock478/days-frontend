// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';


const App = () => {
    return (
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         PagMan juicer.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </header>
      //   </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={LoginComponent()}/>
          <Route path="/home" element={<p>HOME PAGE</p>}/>
        </Routes>
      </BrowserRouter>

    );

  }




export default App;

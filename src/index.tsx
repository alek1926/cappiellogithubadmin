import React, {Context} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Login} from './pages/Login/Login'
import {userContext} from './context/userContext'
import {userMock} from './context/userContext'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <userContext.Provider value={userMock.session}>
      <Routes>
        {userMock.session===true ?
        <Route path="/" element={<App />} />
        :
        <Route path="/" element={<Login />} />
      }
      </Routes>
     </userContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

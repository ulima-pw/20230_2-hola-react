import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Presentation/Login/LoginPage';
import MainPage from './Presentation/Main/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage/> } />
        <Route path='/main' element={ <MainPage/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

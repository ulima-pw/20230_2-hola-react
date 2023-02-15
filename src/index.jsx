import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AboutPage from './Presentation/Aboutus/AboutPage';
import LoginPage from './Presentation/Login/LoginPage';
import MainPage from './Presentation/Main/MainPage';
import RegistroParticipacionPage from './Presentation/RegistroParticipacion/RegistroParticipacionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/20230_2-hola-react/' element={ <LoginPage/> } />
        <Route path='/20230_2-hola-react/main' element={ <MainPage/> } />
        <Route path='/20230_2-hola-react/about' element={ <AboutPage/> } />
        <Route path='/20230_2-hola-react/partipacion' element={ <RegistroParticipacionPage /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

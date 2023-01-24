import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content 
      nombre="Pepe" 
      apellido="Perez"
      sePintaNombre={ true } />
    <Footer />
  </React.StrictMode>
);

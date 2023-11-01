import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';



const App = () => {

  return (
    <BrowserRouter>
         <Route path="/"  component={Login} />
         <Route path="../src/componets/Home" component={Home} />
       </BrowserRouter>
     );
   };

  
export default App

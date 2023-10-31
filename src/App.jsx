import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Home from '../src/components/Home';


const App = () => {

  return (
    <BrowserRouter>
         <Route path="/" exact component={Login} />
         <Route path="../src/componets/Home" component={Home} />
       </BrowserRouter>
     );
   };

  
export default App

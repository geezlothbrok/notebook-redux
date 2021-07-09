import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path = "/" component ={Dashboard}></Route>
        <Route path = "/login" component ={Login}></Route>
        <Route path = "/signup" component ={Signup}></Route>
      </BrowserRouter>
      
    </div>
  )
}


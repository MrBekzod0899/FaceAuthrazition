import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
const user={
    token:'',
    username:''
}
export const MyContext=React.createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyContext.Provider value={user}>
      <Router />
    </MyContext.Provider>
  </BrowserRouter>

);


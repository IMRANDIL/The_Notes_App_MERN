import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';

import Notes from './components/Notes';






function App() {

  const [isLogin, setIsLogin] = useState(false)



  return (
    <div className="App">
      <ToastContainer />
      {
        isLogin ? <Notes /> : <Login />
      }



    </div>
  );
}

export default App;

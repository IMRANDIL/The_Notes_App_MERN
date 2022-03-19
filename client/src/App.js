import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';

import Notes from './components/Notes';






function App() {

  const [isLogin, setIsLogin] = useState(false)




  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const verified = await axios.get('/user/verify', {
          headers: {
            Authorization: token
          }
        });
        setIsLogin(verified.data)
        if (verified.data === false) return localStorage.clear();


      } else {
        setIsLogin(false)
      }
    }

    checkLogin()

  }, [])






  return (
    <div className="App">
      <ToastContainer />
      {
        isLogin ? <Notes /> : <Login setIsLogin={setIsLogin} />
      }



    </div>
  );
}

export default App;

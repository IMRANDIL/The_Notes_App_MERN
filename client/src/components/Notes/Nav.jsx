import React from 'react'

import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';



const Nav = ({ setIsLogin }) => {




    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
        toast.success('Logout Successful!')
    }


    return (
        <header>
            <div className="logo">
                <h1><Link to='/'>Notum</Link></h1>
            </div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/create'>Create Note</Link></li>
                <li onClick={logoutSubmit}><Link to='/'>Logout</Link></li>
            </ul>
        </header>
    )
}

export default Nav
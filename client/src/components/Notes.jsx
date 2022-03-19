import React from 'react'

import Nav from './Notes/Nav';

import Home from './Notes/Home';

import CreateNote from './Notes/CreateNote';

import EditNote from './Notes/EditNote'


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";



const Notes = ({ setIsLogin }) => {
    return (
        <BrowserRouter>
            <div className='notes-page'>
                <Nav setIsLogin={setIsLogin} />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<CreateNote />} />
                    <Route path='/edit/:id' element={<EditNote />} />






                </Routes>


            </div>
        </BrowserRouter>
    )
}

export default Notes
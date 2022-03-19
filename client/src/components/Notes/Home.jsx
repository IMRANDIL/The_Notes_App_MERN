import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js';
import axios from 'axios'













const Home = () => {
    return (
        <div className='note-wrapper'>
            <div className="card">
                <h4 title='Note Title'>Note Title</h4>
                <div className="text-wrapper">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis amet facilis architecto eveniet? Accusamus iure harum amet aspernatur, unde dolorem vitae? Placeat accusantium pariatur perspiciatis?</p>

                </div>
                <p className='date'>Note Date</p>
                <div className="card-footer">
                    User Name
                    <Link to='/'>Edit</Link>
                </div>
                <button className='close'>X</button>
            </div>
        </div>
    )
}

export default Home
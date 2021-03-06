import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js';
import axios from 'axios'
import { toast } from 'react-toastify';













const Home = () => {


    const [notes, setNotes] = useState([]);
    const [token, setToken] = useState('')




    const getNotes = async (token) => {
        try {
            const res = await axios.get('/api/notes', {
                headers: {
                    Authorization: token
                }

            })
            setNotes(res.data)

        } catch (error) {
            console.log(error);
        }

    }





    useEffect(() => {

        const token = localStorage.getItem('token');

        setToken(token);
        if (token) {
            getNotes(token)
        }





    }, [])





    const deleteNote = async (id) => {

        try {
            if (token) {
                await axios.delete(`api/notes/${id}`, {
                    headers: {
                        Authorization: token
                    }
                });
                toast.success('Note Deleted!')
                getNotes(token)
            }



        } catch (error) {
            window.location.href = '/'
            console.log(error);
        }


    }









    return (
        <div className='note-wrapper'>

            {notes.length === 0 && <h2 style={{ color: 'maroon' }}>No Note Found!</h2>}

            {
                notes.map((note) => (

                    <div className="card" key={note._id}>
                        <h4 title={note.title}>{note.title}</h4>
                        <div className="text-wrapper">
                            <p>{note.content}</p>

                        </div>
                        <p className='date'>{format(note.date, 'en-US')}</p>
                        <div className="card-footer">
                            {note.name}
                            <Link to={`edit/${note._id}`}>Edit</Link>
                        </div>
                        <button className='close' onClick={() => deleteNote(note._id)}>X</button>
                    </div>




                ))
            }




        </div>
    )
}

export default Home
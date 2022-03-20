import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'








const CreateNote = () => {

    const navigation = useNavigate()

    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    });



    const onChange = e => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();





        try {

            const token = localStorage.getItem('token');

            if (token) {
                const { title, content, date } = note;

                const newNote = {
                    title, content, date
                }

                await axios.post('/api/notes', newNote, {
                    headers: {
                        Authorization: token
                    }
                });


                toast.success('Note Created!');
                return navigation('/')
            }




        } catch (error) {
            console.log(error);
            window.location.href = '/'
        }
    }







    return (
        <div className='create-note'>
            <h2>Create Note</h2>

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <label htmlFor="Title">Title</label>
                    <input type="text" placeholder='Title' id='Title' value={note.title} name='title' required autoComplete='off' onChange={onChange} />
                </div>

                <div className="row">
                    <label htmlFor="Content">Content</label>
                    <textarea type="text" onChange={onChange} rows='10' placeholder='Content' id='Content' value={note.content} name='content' required autoComplete='off' />
                </div>

                <label htmlFor="Date">Date: {note.date}</label>

                <div className="row">

                    <input type="date" id='Date' name='date' onChange={onChange} />
                </div>

                <button type='submit'>Save</button>

            </form>

        </div>
    )
}

export default CreateNote
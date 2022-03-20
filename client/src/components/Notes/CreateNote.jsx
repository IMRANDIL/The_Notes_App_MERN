import React, { useState } from 'react'










const CreateNote = () => {

    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    })





    return (
        <div className='create-note'>
            <h2>Create Note</h2>

            <form>

                <div className="row">
                    <label htmlFor="Title">Title</label>
                    <input type="text" placeholder='Title' id='Title' value={note.title} name='title' required autoComplete='off' />
                </div>

                <div className="row">
                    <label htmlFor="Content">Content</label>
                    <textarea type="text" rows='10' placeholder='Content' id='Content' value={note.content} name='content' required autoComplete='off' />
                </div>

                <label htmlFor="Date">Date: {note.date}</label>

                <div className="row">

                    <input type="date" id='Date' name='date' required />
                </div>

                <button type='submit'>Save</button>

            </form>

        </div>
    )
}

export default CreateNote
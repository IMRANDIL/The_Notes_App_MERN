import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';










const EditNote = () => {

  let { id } = useParams()

  const navigation = useNavigate()

  const [note, setNote] = useState({
    title: '',
    content: '',
    date: '',
    id: ''
  });









  useEffect(() => {


    const getNote = async () => {
      const token = localStorage.getItem('token');

      if (id) {
        const { data } = await axios.get(`/api/notes/${id}`, {
          headers: {
            Authorization: token
          }
        })


        setNote({
          title: data.title,
          content: data.content,
          date: new Date(data.date).toLocaleDateString('en-US'),
          id: data._id
        });






      }
    }

    getNote()

  }, [id])











  const onChange = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value })
  }



  const handleSubmit = async (e) => {
    e.preventDefault();





    try {

      const token = localStorage.getItem('token');

      if (token) {
        const { title, content, date, id } = note;

        const newNote = {
          title, content, date
        }

        const data = await axios.put(`/api/notes/${id}`, newNote, {
          headers: {
            Authorization: token
          }
        });

        toast.success(data.data.msg);
        return navigation('/')




      }




    } catch (error) {
      console.log(error);

    }
  }

















  return (
    <div className='create-note'>
      <h2>Edit Note</h2>

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

export default EditNote
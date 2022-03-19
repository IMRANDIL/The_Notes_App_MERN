const router = require('express').Router();
const { getNotes, createNote, deleteNote, getoneNote, updateNote } = require('../controllers/note');


const { auth } = require('../middlewares/auth')




router.route('/').get(auth, getNotes).post(auth, createNote)


router.route('/:id').get(auth, getoneNote).put(auth, updateNote).delete(auth, deleteNote)





module.exports = router;
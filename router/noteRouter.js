const router = require('express').Router();
const { getNotes, createNote } = require('../controllers/note');


const { auth } = require('../middlewares/auth')




router.route('/').get(auth, getNotes).post(auth, createNote)


router.route('/:id').get().put().delete()





module.exports = router;


const router = require('express').Router();
const { userRegister, userLogin, verifiedUser } = require('../controllers/user');
const { auth } = require('../middlewares/auth')

//register...


router.post('/register', userRegister)



//login....

router.post('/login', userLogin)



//verify token...

router.get('/verify', verifiedUser)





module.exports = router;
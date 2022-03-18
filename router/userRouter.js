

const router = require('express').Router();
const { userRegister, userLogin } = require('../controllers/user');


//register...


router.post('/register', userRegister)



//login....

router.post('/login', userLogin)



module.exports = router;

const User = require('../models/userModal')

const bcrypt = require('bcrypt')

exports.userRegister = async (req, res, next) => {


    try {

        const { username, email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) return res.status(400).json({ msg: 'E-mail already exists!' });


        //hash the password...


        const hashedpass = await bcrypt.hash(password, 12);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedpass
        });


        await newUser.save();


        res.status(201).json({ msg: 'Signup Successful!' })






    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}




//login controller...



exports.userLogin = async (req, res, next) => {
    try {

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
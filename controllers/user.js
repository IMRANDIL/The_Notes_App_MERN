
const User = require('../models/userModal')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//register.......


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

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });


        if (!user) return res.status(400).json({ msg: 'User does not exist!' });


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials!' })

        //if login success...

        const payload = { id: user._id, name: user.username };

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });


        res.status(200).json({ token: token, username: user.username, msg: 'Login Successful!' })


    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}




//verified user........


exports.verifiedUser = async (req, res, next) => {
    try {

        const token = req.header('Authorization');

        if (!token) return res.send(false)


        jwt.verify(token, process.env.SECRET, async (err, verified) => {
            if (err) return res.send(false);

            const user = await User.findById(verified.id);

            if (!user) return res.send(false)

            return res.send(true)



        })



    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
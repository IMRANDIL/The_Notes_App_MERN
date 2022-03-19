
const jwt = require('jsonwebtoken');


exports.auth = async (req, res, next) => {
    try {

        const token = req.header("Authorization");

        if (!token) return res.status(400).json({ msg: 'Not Authorized!' });


        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.status(400).json({ msg: 'Authorization Failed!' });

            req.user = user;

            next()
        })


    } catch (error) {

        return res.status(500).json({ msg: error.message })


    }
}
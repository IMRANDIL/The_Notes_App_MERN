require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userrouter = require('./router/userRouter');
const noteRouter = require('./router/noteRouter')

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));







//route....

app.use('/user', userrouter)


app.use('/api/notes', noteRouter)



const PORT = process.env.PORT || 3000;



mongoose.connect(process.env.URI).then(() => {
    console.log(`DB connected😄`);
    app.listen(PORT, () => {
        console.log(`Server listens on port:${PORT}😃`);
    })

}).catch(err => console.log(err))















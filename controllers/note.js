const Note = require('../models/noteModel');



//get all note......



exports.getNotes = async (req, res, next) => {
    try {


        const notes = await Note.find({ user_id: req.user.id });

        res.status(200).json(notes)



    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}



//create all note.....



exports.createNote = async (req, res, next) => {
    try {

        const { title, content, date } = req.body;

        const newNote = new Note({
            title,
            content,
            date,
            user_id: req.user.id,
            name: req.user.name
        });

        await newNote.save()

        res.status(201).json({ msg: 'Created a note successfully!', name: req.user.name })


    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
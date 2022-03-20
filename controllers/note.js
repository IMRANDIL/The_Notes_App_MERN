const Note = require('../models/noteModel');



//get all note......



exports.getNotes = async (req, res, next) => {
    try {


        const notes = await Note.find({ user_id: req.user.id });

        res.status(200).json(notes)

        next()

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



//delete note.....


exports.deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Deleted a note!' })


    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}


//update note....


exports.updateNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content, date } = req.body;

        await Note.findOneAndUpdate({ _id: id }, {
            title,
            content,
            date
        });

        res.status(200).json({ msg: 'Successfully updated!' })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}



//get one....

exports.getoneNote = async (req, res, next) => {
    try {
        const { id } = req.params;

        const note = await Note.findOne({ _id: id });

        res.status(200).json(note)


    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
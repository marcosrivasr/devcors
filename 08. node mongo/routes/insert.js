const Foto = require('../models/foto');


module.exports = (req, res) => {
    console.log(req.file);
    const { title, description} = req.body;
    const foto = new Foto({
        title: title,
        description: description,
        date: new Date(),
        filename: req.file.filename
    }); 

    foto.save().then(() => console.log('Nueva foto insertada'));
    res.send(`insert`);
}
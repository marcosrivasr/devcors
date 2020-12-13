const Foto = require('../models/foto');


module.exports = async (req, res) => {
    console.log(req.file);
    const { title, description} = req.body;
    const foto = new Foto({
        title: title,
        description: description,
        date: new Date(),
        filename: req.file.filename
    }); 

    await foto.save();

    res.redirect('/');
}
const Foto = require('../models/foto');

module.exports = async (req, res) => {
    const { id } = req.params;
    const response = await Foto.findOneAndDelete({_id:id})

    console.log(response);

    res.redirect('/');

}
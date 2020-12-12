const Foto = require('../models/foto');

module.exports = async (req, res) => {
    const fotos = await Foto.find();
    res.json(fotos);
}
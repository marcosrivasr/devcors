const Foto = require('../models/foto');

module.exports = async (req, res) => {
    const {id, title, description} = req.body;
    //encontrar el elemento
    const query = Foto.where({_id: id});

    //actualizarlo    
    const response = await query.findOneAndUpdate({
        title: title,
        description: description
    });

    console.log(response);
    res.redirect('/');
}
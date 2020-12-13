const Foto = require('./../models/foto');

module.exports = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const query = Foto.where({_id : id});
    const item = await query.findOne();
    console.log(item);
    res.render('getitem', {
        item: item
    });
    /* query.findOne( (err, item) => {
        if (err) return handleError(err);
        res.render('getitem', item);
    }); */
   
}
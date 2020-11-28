module.exports = (req, res) => {

    console.log(req.body.nombre);
    res.send(`insert`);
}
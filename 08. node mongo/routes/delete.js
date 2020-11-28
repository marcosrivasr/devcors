module.exports = (req, res) => {
    console.log(req.params);
    res.send(`delete id: ${req.params.id}`);
}
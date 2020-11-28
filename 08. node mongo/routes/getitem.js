module.exports = (req, res) => {
    res.send(`id: ${req.params.id}`);
}
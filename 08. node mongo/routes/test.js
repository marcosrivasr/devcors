const Foto = require('../models/foto');

module.exports = (req, res) => {

    res.render('test', { title: 'Hey', message: 'Hello there!'});
    /* const foto = new Foto({
        title: 'titulo',
        description: 'Hola a todos',
        date: '2020/11/06',
        filename: 'fotito.jpg'
    });
    console.log(foto); // 'Silence'

    foto.save();

    res.send('HOla'); */


}
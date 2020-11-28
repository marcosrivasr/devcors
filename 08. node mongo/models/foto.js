const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const FotoSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  date: Date,
  filename: String
});

const Foto = mongoose.model('Fotos', FotoSchema);
module.exports = Foto;


const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log('connectin to url', url);

mongoose.connect(url)
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB', error.message);
})

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })

module.exports = mongoose.model('Note', noteSchema);
  
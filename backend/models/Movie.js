const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({

  title: {
    type: String
  },
  releaseYear: {
    type: String
  },
  casting: {
    type: String
  },
  directors:{
    type: String
  },
  producers:{
    type: String
  },
  
}, {
    collection: 'movies'
  })

module.exports = mongoose.model('Movie', movieSchema)


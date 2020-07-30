const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({

  lastName: {
    type: String
  },
  firstName: {
    type: String
  },
  aliases: {
    type: String
  },
  roleActor:{
    type: String
  },
  roleDirector:{
    type: String
  },
  roleProducer:{
    type: String
  }
  
}, {
    collection: 'persons'
  })

module.exports = mongoose.model('Person', personSchema)





const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/kampie_db',{useNewUrlParser:true});

module.exports = {mongoose}
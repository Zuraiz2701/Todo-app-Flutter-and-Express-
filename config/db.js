const mongoose = require('mongoose');
//Set up default mongoose connection
const connection = mongoose.createConnection('mongodb+srv://Zuraiz:1234@cluster0.lgkd3ld.mongodb.net/').on('open', ()=>{
    console.log('Mongo DB connected');
}).on('error', ()=>{
    console.log("Connection Error with MOngo DB");
})

module.exports = connection;
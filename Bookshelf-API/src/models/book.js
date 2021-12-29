const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');





const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
        
    },
    author:{
       type:String,
       required:true,
       trim:true
        
    },
    genre:{
        type:String,
        required:true
    

    },
    description:{
        type:String
    }

   
    

},{timestamps:true})


const Book = mongoose.model('Book',bookSchema);

module.exports = Book;
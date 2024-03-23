var express = require('express');
var cors = require( 'cors' );
var {MongoClient} = require('mongodb');
var mongoose = require("mongoose");

var book = express();
book.use(cors());
book.use(express.json());




const books = mongoose.model('books',{"name":String, "price":Number, "author":String, "category":String});
book.post('/add',async(req,res)=>{
    let body = req['body']
    await mongoose.connect("mongodb://localhost:27017/BookManagement");
    const addbook = new books({"name":body['name'],"price":body['price'],"author":body["author"],"category":body["category"]});
    await addbook.save();
    res.json({"message":"Data is inserted"});
    res.end();
});
book.get('/getbook', async(req,res)=>{
    await mongoose.connect("mongodb://localhost:27017/BookManagement");
    var data =await books.find();
    res.json(data);
    // res.json({"message":"Data fetched successfully"});
    res.end();
})

book.listen(8080,()=>{
    console.log("server start at 8080");
});
const mongoose = require('mongoose')


// create a schema, this is akin to CREATE TABLE in sql
const user = new mongoose.Schema({
name:{type:String, required:true},
email:{type:String, required:true},
password:{type:String, required:true}
})


module.exports = mongoose.model('users', user)



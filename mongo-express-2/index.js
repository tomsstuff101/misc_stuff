const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 


mongoose.connect('mongodb://localhost:27017/signup',{
    useNewUrlParser:true
})

app.get('/', (req,res) => {
    res.send('hello')
})


app.post('/', (req,res) => {
    let name = req.body.name;

    let user = new User({
        name:name
    })

    user.save()

})

app.listen(3000, ()=>{
    console.log('listening to 3000')
})


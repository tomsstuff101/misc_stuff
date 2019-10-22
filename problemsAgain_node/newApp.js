const os = require('os')
const fs = require('fs')

// const myMiniChallanges = require('./app.js')


let userDetails = os.userInfo().username

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if(err){
        console.log('oops')
    }
})




// myMiniChallanges.alpha()
// myMiniChallanges.circleProp(9)



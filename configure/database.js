const mongoose = require('mongoose')

const setupDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/ticket-master')
    .then(()=>{
        console.log('connected to the database ')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = setupDb
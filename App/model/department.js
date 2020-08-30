const mongoose = require('mongoose')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name : {
        type : String,
        required : true,
        minlength : 5
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Departments = mongoose.model('Departments',departmentSchema)

module.exports = Departments
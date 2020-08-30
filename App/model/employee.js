
  
const mongoose = require('mongoose')
const validators = require('validators')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name : {
        type : String,
        required : true,
        minlength : 5
    },
    email : {
        type : String,
        validators : {
            validate : function(email){
                return validators.isEmail(email)
            },
            message : function(){
                return 'invalid email type'
            }
        },
        unique : true,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        maxlength : 10
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Departments',
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee

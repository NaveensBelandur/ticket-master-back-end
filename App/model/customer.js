const mongoose = require('mongoose')
const validators = require('validators')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    name : {
        type : String,
        require  : true,
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
        unique : true,
        maxlength : 10
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer
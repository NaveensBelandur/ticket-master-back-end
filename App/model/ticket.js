const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    code : {
        type : String,
        required : true,
        minlength : 5,
        unique : true
    },
    isResolved : {
        type : Boolean,
        required : true
    },
    message : {
        type : String,
        required : true,
        minlength : 5
    },
    priority : {
        type : String,
        required : true
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'Customer',
        required : true
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Departments',
        required : true
    },
    employees : [
        {
            employee : {
                type : Schema.Types.ObjectId,
                ref : 'EMPLOYEE',
                require : true
            }
        }
    ],
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }

})

const Ticket = mongoose.model('Ticket',ticketSchema)

module.exports = Ticket
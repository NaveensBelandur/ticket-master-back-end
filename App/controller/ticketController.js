const Ticket = require('../models/ticket')

module.exports.list = (req,res) => {
    const {user} = req
    Ticket.find({
        user : user._id
    })
        .then((ticket)=>{
            res.json(ticket)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const {user} = req
    const data = req.body
    const ticket = new Ticket(Object.assign({},data,{isResolved:false}))
    ticket.user = user._id
    ticket.save()
        .then((ticket)=>{
            res.json(ticket)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {user} = req
    const id = req.params.id
    Ticket.findOne({
        _id : id,
        user : user._id
    })
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const data = req.body
    const {user} = req
    Ticket.findOneAndUpdate({
        _id :id,
        user : user._id
    },data,{new:true,runValidators:true})
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const {user} = req
    Ticket.findOneAndDelete({
        _id : id,
        user : user._id
    })
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

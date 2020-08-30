const Customer = require('../models/customer')

module.exports.list = (req,res) => {
    const {user} = req
    Customer.find({
        user : user._id
    })
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const {user} = req
    const data = req.body
    const customer = new Customer(data)
    customer.user = user._id
    customer.save()
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const {user} = req
    Customer.findOne({
        _id : id,
        user : user._id
    })
        .then((customer)=>{
            if(customer){
                res.json(customer)
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
    Customer.findOneAndUpdate({_id:id,user:user._id},data,{new:true,runValidators:true})
        .then((customer)=>{
            if(customer){
                res.json(customer)
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
    Customer.findOneAndDelete({_id:id,user:user._id})
        .then((customer)=>{
            if(customer){
                res.json(customer)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.josn(err)
        })
}
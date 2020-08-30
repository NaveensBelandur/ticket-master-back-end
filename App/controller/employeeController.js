const Employee = require('../models/employee')

module.exports.list = (req,res) => {
    const {user} = req
    Employee.find({
        user : user._id
    }).populate('department')
        .then((employee)=>{
            res.json(employee)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const {user} = req
    const data = req.body
    const employee = new Employee(data)
    employee.user = user._id
    employee.save()
        .then((employee)=>{
            res.json(employee)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {user} = req
    const id = req.params.id
    Employee.findOne({
        _id : id,
        user : user._id
    }).populate('department')
        .then((employee)=>{
            if(employee){
                res.json(employee)
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
    Employee.findOneAndUpdate({
        _id : id,
        user : user._id
    },data,{new:true,runValidators:true})
        .then((employee)=>{
            if(employee){
                res.json(employee)
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
    Employee.findOneAndDelete({
        _id : id,
        user : user._id
    })
        .then((employee)=>{
            if(employee){
                res.json(employee)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
const Department = require('../models/department')

module.exports.list = (req,res) => {
    const {user} = req
    Department.find({
        user : user._id
    })
        .then((department)=>{
            res.json(department)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const {user} = req
    const data = req.body
    const department = new Department(data)
    department.user = user._id
    department.save()
        .then((department)=>{
            res.json(department)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const {user} = req
    Department.findOne({
        _id : id,
        user : user._id
    })
        .then((department)=>{
            if(department){
                res.json(department)
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
    Department.findOneAndUpdate({_id : id,user : user._id},data,{new:true,runValidators:true})
        .then((department)=>{
            if(department){
                res.json(department)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })

}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    const {user} = req
    Department.findOneAndDelete({
        _id : id,
        user : user._id
    })
        .then((department)=>{
            if(department){
                res.json(department)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
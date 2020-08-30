const Receips = require('../model/Receip')

module.exports.Create=(req,res)=>{
    const {user} = req
    const body = req.body
    const receips = new Receips(body)
    receips.user = user._id
    receips.save()
     .then((response)=>{
         res.json(({
             notice:'created your first receip',
             response
         }))
     })
     .catch((err)=>{
         res.json(err)
     })


}

module.exports.List=(req,res)=>{
    const {user}= req
    Receips.find({
        user:user._id
    })
    .then((response)=>{
        res.json({
            notice:'all the receips you have posted',
            response
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.Destroy = (req,res)=>{
    const {user}=req
    const id = req.params.id
    Receips.findOneAndDelete({
        id:id,
        user:user.id
    })
    .then((response)=>{
        res.json({
            notice:'deleted your receips succecfully',
            response
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.Edit=(req,res)=>{
    const {user} = req
    const id =req.params.id
    const body = req.body
    Receips.findOneAndUpdate({
        _id:id,
        user:user._id
    },body)
    .then((response)=>{
        res.json({
            notice:'updated the receips succecfully',
            response
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.GetAll=(req,res)=>{
    Receips.find()
    .then((response)=>{
        res.json({
            notice:'all the receipsof the users',
            response
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}
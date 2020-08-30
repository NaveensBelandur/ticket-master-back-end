const User = require('../model/User')


module.exports.Register=(req,res)=>{
    const body = req.body
    const user = new User(body)
    console.log('HIii')
    user.save()
    .then((response)=>{
        res.json({
            username:response.username,
            password:response.password,
            email:response.email
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.Login =(req,res)=>{
    const body = req.body
    User.findByCredentials(body.email,body.password)
    .then((user)=>{
        user.generateToken()
        .then((token)=>{
            res.json({
                'token':token
            })
        })
        .catch((err)=>{
            res.json(err)
        })
    })
}

module.exports.Account=(req,res)=>{
    const {user} = req
    User.findOne({
        _id:user._id
    })
    .then((user)=>{
        res.json({
            _id : user._id,
            username : user.username,
            email : user.email
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.Logout=(req,res)=>{
    const{user,token} = req
    User.findByIdAndUpdate(user._id,{$pull : {tokens : {token : token}}})
    .then(()=>{
        res.json({notice:'logoutd out succecfuly'})
    })
    .catch((err)=>{
        res.json(err)
    })
}
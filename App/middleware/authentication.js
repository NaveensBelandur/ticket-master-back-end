const User = require('../model/User')

const authenticationuser = (req,res,next)=>{
    const token = req.header('x-auth')
    User.findByToken(token)
    .then((user)=>{
        if(user){
            req.user=user,
            req.token=token,
            next()
        }
        else{
            res.json('invalid token')
        }
    })
    .catch((err)=>{
        res.status('401').send(err)
    })
}
module.exports = authenticationuser
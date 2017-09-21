const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
module.exports = {

    signup: async (req,res,next)=>{
      
        const user = await User.findOne({email:req.body.email})
     
        if(user){
            res.send({error:'user already exists'})
        }
        const newUser = new User()

        newUser.email = req.body.email
        newUser.name = req.body.name
        newUser.password = req.body.password

        await newUser.save()

        const token = jwt.sign({
            name:req.body.name
          }, 'secret', { expiresIn: '1h' })

        res.send(token)
    },

    login:async (req,res,next)=>{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.send('user dont exist')
        }
        console.log(user)
         user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err){
                res.send('err')
            }
            if(!isMatch){
                res.send('wrong password')
            }
            if(isMatch){
                const token = jwt.sign({
                    data: 'foobar'
                  }, 'secret', { expiresIn: '1h' })
        
                res.send(token)
            }
        })
    },


    //test

    users:async(req,res,next)=>{
        const users = await User.find({})
        res.send(users)
    }

}
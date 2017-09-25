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
        console.log(newUser)
        const token = jwt.sign({
            name:req.body.name,
            email:req.body.email,
            state:newUser.state,
            city:newUser.city
          }, 'secret', { expiresIn: '24h' })

        res.send(token)
    },

    login:async (req,res,next)=>{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.send({email:'user dont exist'})
        }
         user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err){
                res.send('err')
            }
            if(!isMatch){
                res.send({password:'wrong password'})
            }
            if(isMatch){
                const token = jwt.sign({
                    name:user.name,
                    email:user.email,
                    state:user.state,
                    city:user.city
                  }, 'secret', { expiresIn: '24h' })
        
                res.send(token)
            }
        })
    },

    authenticate:async(req,res,next)=>{
        const authorizationHeader = req.headers['authorization']
        let token
        if(authorizationHeader){
            token = authorizationHeader.split(' ')[1]
           
            
        }
        if(token){
            
            const decoded  = jwt.verify(token, 'secret')
            console.log(token)
            const user = await User.findOne({email:decoded.email})
          
            if(!user){
                res.send('no such user')
            }
            req.user =user
            next()
        }else{
            console.log('no token provided')
        }
    },

    settings: async(req,res,next)=>{
        const user = await User.findOne({email:req.user.email})
        console.log(req.body)
        user.name = req.body.name
        user.city = req.body.city
        user.state = req.body.state
        await user.save()
        
        
       
        console.log(user)
             const token = jwt.sign({
                    name:user.name,
                    email:user.email,
                    state:user.state,
                    city:user.city
                  }, 'secret', { expiresIn: '24h' })
        
                res.send(token)
        
    },



    //test

    users:async(req,res,next)=>{
        const users = await User.find({})
        res.send(users)
    },
    delete:async(req,res,next)=>{
        const deleted = await User.remove({})
        res.send(deleted)
    }

}
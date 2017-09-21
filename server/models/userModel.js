const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    city:{
        type:String
    },
    state:{
        type:String
    }
})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password, 10, function(err, hash) {
        user.password = hash
        next()
      });
})

userSchema.methods.comparePassword = function(password, done){
    bcrypt.compare (password,this.password, function(err,isMatch){
        done(err, isMatch)
    })
}



module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
        
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error({error:'this is not valid email'})
        }

    },
    password:{
        type:String,
        required:true,
        minlength:8
        

    },
    age:{
        type:Number
    },
    sex:{
        type:String,
        trim:true

    },
    tokens:[{
       token:{
           type:String,
           required:true
       }
        
    }]
    

},{timestamps:true})
userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.avatar
    return userObject
}

userSchema.methods.generateAuthToken = async function(){
    let user = this;
    let token = jwt.sign({_id:user._id.toString()},'token generator by imran');
    user.tokens.push({token})
    await user.save();
    return token;
}

userSchema.statics.isAuthenticated = async function(email,password){
  
        const user  = await User.findOne({email});      
        if(!user)
            return new Error({error:'user not found'})
        
        const isMatch = await bcrypt.compare(password,user.password);       
        if(!isMatch)
            return new Error({error:'wrong pasword please again'});
        
        return user

       
   
}
userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
       user.password = await bcrypt.hash(user.password,8);

    }
    
    next()
})




const User = mongoose.model('user',userSchema);

module.exports = User;
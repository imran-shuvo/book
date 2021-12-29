const express = require('express');
const { TokenExpiredError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const auth = require('../middlewire/auth');
const { update } = require('../models/user');

const User = require('../models/user');


const userRouter = new express.Router();



userRouter.post('/signup',async (req,res)=>{
    try{
        
        const user =  new User(req.body);
        console.log(user)
        await user.save()
        const token =  user.generateAuthToken();
        res.status(200).send(user)

    }catch(e){
        res.status(404).send({error:'try again'})
    }

})


userRouter.post('/login',async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.isAuthenticated(email,password);
        user.generateAuthToken()
        res.status(201).send(user)


    }catch(e){
        res.status(404).send(e)

    }
})


userRouter.get('/me',auth,async(req,res)=>{
    try{

        res.send(req.user)

    }catch(e){
        res.status(404).send(e)
    }
    
})

userRouter.patch('/me/update',auth,async(req,res)=>{
    const allowedUpdates = ['name','password','age','sex'];
    const updates = Object.keys(req.body);
    const isAllowed = updates.every((update)=> {
        return allowedUpdates.includes(update);
    });
   
    if(!isAllowed)
        res.status(404).send({error:'update is not allowed'})

    try{
        updates.forEach((update)=>{
            req.user[update] = req.body[update];
    
        })
        await  req.user.save();
        res.send(req.user)

    }catch(e){
        res.status(404).send({error:'update is not allowed'})

    }
    

    
    
})

userRouter.get('/logout',auth,async (req,res)=>{
    try{
        
        req.user.tokens = req.user.tokens.filter(token=> {
            return token.token!=req.token;
            
        });
        await req.user.save();
        res.status(201).send({done:'logout successfully'})

    }catch(e){
        res.status(404).send({error:"try again!!!"})

    }

})

userRouter.delete('/me/delete',auth,async (req,res)=>{
    try{
        req.user.remove();
        res.status(200).send({done:'successfully delete user'})

    }catch(e){
        res.status(404).send({error:"try again please"})
    }
    
})



module.exports = userRouter
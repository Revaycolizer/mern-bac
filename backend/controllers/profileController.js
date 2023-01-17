const Profile = require('../models/profileModel')
const mongoose = require('mongoose')

//get all profile
const getProfiles = async (req,res)=>{
    const profiles = await Profile.find({}).sort({createdAt: -1})

    res.status(200).json(profiles)
}


//get a single profile
const getProfile = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such profile'})
    }

    const profile = await Profile.findById(id)

    if(!profile){
        return res.status(404).json({error: 'No such profile'})
    }
    res.status(200).json(profile)

}


//create a new profile
const createProfile = async(req,res)=>{

    //add doc to db
    const{name,regno,course,phoneno} =req.body
    try{
    const profile = await Profile.create({
        username,regno,course,phoneno})
        res.status(200).json(profile)
    }catch(error){
    res.status(400).json({error: error.message})
    }
}

//delete profile
const deleteProfile = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such profile'})
    }

    const profile = await Profile.findOneAndDelete({_id: id})

    if(!profile){
        return res.status(404).json({error: 'No such profile'})
    }
    res.status(200).json(profile)

   
}

//update profile
const updateProfile = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No such profile'})
    }

    const profile = await Profile.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!profile){
        return res.status(404).json({error: 'No such profile'})
    }

    res.status(200).json(profile)

}

module.exports ={
    getProfiles,
    getProfile,
    deleteProfile,
    updateProfile,
    createProfile
}
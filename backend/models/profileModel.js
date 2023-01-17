const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    regno:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model( 'profile',profileSchema)


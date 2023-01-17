
const express = require('express')

const{
    createProfile,
    getProfiles,
    deleteProfile,
    updateProfile,
    getProfile
} = require('../controllers/profileController')

const router = express.Router()

//get all profiles
router.get('/', getProfiles)


//get a single profile
router.get('/:id', getProfile)

//post a new profile
router.post('/',createProfile)

//delete a profile
router.delete('/:id',deleteProfile)

//update a profile
router.patch('/:id',updateProfile)



module.exports =router
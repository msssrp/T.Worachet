const express = require('express')
const router = express.Router()
const Restaurant = require('../controllers/restaurant.controller')


router.post('/restaurants',async(req,res)=>{
    try {
        const newRestaurant = req.body
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant)
        res.status(202).json(createRestaurant)    
    } catch (error) {
        res.status(500).json({error:"Failed to create new restaurant"})
    }
})

router.get('/restaurants',async(req,res)=>{
    try {
        const getRestaurants = await Restaurant.getAllRestaurant()
        res.status(202).json(getRestaurants)
    } catch (error) {
        res.status(500).json({error:"Error on Internal Server"})
    }
})

router.get('/restaurants/:id', async(req,res)=>{
    const id = req.params['id']
    try {
        const getRestaurantByID = await Restaurant.getRestaurant(id)
        if(getRestaurantByID.error){
            return res.status(404).json(getRestaurantByID.error)
        }
        res.status(202).json(getRestaurantByID)
    } catch (error) {
        res.status(500).json({error:"Error on Internal Server"})
    }
})

router.delete('/restaurants/:id' , async(req,res)=>{
    const id = req.params['id']
    try {
        const deleteRestaurantByID = Restaurant.deleteRestaurant(id)
        if(deleteRestaurantByID.success){
            return res.status(202).json(deleteRestaurantByID.success)
        }else{
            return res.status(404).json(deleteRestaurantByID.error)
        }
    } catch (error) {
        res.status(500).json({error:"Error on Internal Server"})
    }
})

module.exports = router
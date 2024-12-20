const express = require ('express')
const router = express.Router()
const Fruit = require('../models/fruit')


//get fruits
router.get('/', async (req, res)=>{
    try{
    const allFruit = await Fruit.find({})
    res.json(allFruit)
    }catch (error) {
        res.status(500).json({errors: error.message})
    }
})

//create new fruit
router.post('/', async(req, res)=> {
    try{
        const createdFruit = await Fruit.create(req.body)
        console.log(req.body)
        res.json(createdFruit)
Fruit.create(req.body)
    } catch (error) {
        res.status(500).json({errors: error.message})

    }
})


router.get('/:id', async (req, res)=>{
    try{
        const singleFruit = await Fruit.findById(req.params.id)
        res.json(singleFruit)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put('/:id', async(req, res)=> {
    try{
const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
res.json(updatedFruit)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



router.delete("/:id", async (req, res)=>{
    try{
const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
res.json(deletedFruit);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
module.exports = router
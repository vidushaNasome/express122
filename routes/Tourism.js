const express =require('express')
const router =express.Router();
const Tourism =require('../models/TourismModel');

//getting all
router.get('/getAll',(req,res)=>{
    const abt=Tourism.find().then(
        tourism=>{
            res.send(tourism)
        }
    )
});
//adding
router.post('/add', async (req, res) => {
    const tourism = new Tourism(req.body);
    try {
        await tourism.save();
        res.send(tourism);
    } catch (err) {
        res.status(500).send(err);
    }
});
//deleting
router.delete('/deleteid/:id',(req,res)=>{
    Tourism.findById(req.params.id).then(xx=>{
            if(xx){
                xx.remove();
                res.send("deleted successfully");
            }else{
                res.send('invalid');
            }
        }

    )
});
//checking commit
module.exports = router;

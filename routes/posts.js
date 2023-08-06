const express=require('express');
const router=express.Router();
const postController=require('../controllers/posts_controllers');
router.get('/article',postController.article);



module.exports=router;
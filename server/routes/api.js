const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const Config = require('../../config.json')

const db = `mongodb://${Config.authenticate.user}:${Config.authenticate.password}@${Config.uri}`;
mongoose.Promise = global.Promise;

mongoose.connect(db,(err) => {
	if (err){
		console.log(`Error:${err}`);
	}else{
		console.log("Connected to MongoDB")
	}
})

router.get('/videos',(req,res) =>{
	console.log("Request for all videos")
	Video.find({}).exec((err,videos) =>{
		if (err){
			console.log(`Error on retreving videos :${err}`);
		}else{
			res.json(videos);
		}
	})
})

router.get('/videos/:id',(req,res) => {
	// let id = req.query.id;
	Video.findById(req.params.id).exec((err,video) => {
		if (err){
			console.log(`Error while retrieving video :${err}`);
		}else{
			res.json(video);
		}
	})
})

router.post('/videos',(req,res) =>{
	console.log("Post a video");
	let newVideo = new Video();
	newVideo.title = req.body.title;
	newVideo.url = req.body.url;
	newVideo.description = req.body.description;

	newVideo.save((err,newvideo) => {
		if(err){
			console.log(`Error while saving video :${err}`);
		}else{
			res.json(newvideo)
		}
	})
});

router.put('/videos/:id',(req,res) =>{
	console.log("Update a video");
	Video.findByIdAndUpdate(req.params.id,
	{
		$set:{title:req.body.title,
			url:req.body.url,
			description:req.body.description
		}
	},
	{new:true},
	(err,updatedvideo) =>{
		if(err){
			res.send("Error Updating Video");
		}else{
			res.json(updatedvideo)
		}
	});

})

module.exports = router;
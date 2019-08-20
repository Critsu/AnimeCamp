var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
			{ 
			name:"Imoto",
			image: "http://www.otakuusamagazine.com/wp-content/uploads/2017/12/eromanga.jpg",
			description: "Kawai Kawai Kawai"
			},
			{ 
			name:"Boruto",
			image: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg",
			description: "dsadsadjaksldjklsad"
			},
			{ 
			name:"Imoto2",
			image: "https://animeforever.org/wp-content/uploads/2018/06/Latomorihburlada.jpg",
			description: "fsfsfdsfdvcxvcxvxcvx"
			}
		]

function seedDB(){

Campground.remove({},function(err){
	if(err){
		console.log(err);
	}
	console.log("Removed");
	//add a few campgrounds
	data.forEach(function(seed){
		Campground.create(seed,function(err,campground){
			if(err){
				console.log(err)
			} else {
				console.log ("added a campground");
				//add a few comments
				Comment.create(
					{
						text:"This is so cute",
						author: "Me"	
					},function(err,comment){
						if(err){
							console.log(err);
						} else{
						campground.comments.push(comment);
						campground.save();
						console.log("created new comment")							
						}
					});
				}
		});
	});
});

}

module.exports = seedDB;

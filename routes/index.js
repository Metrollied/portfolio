var express = require('express');
var router = express.Router();

let items = [
	{
		title: "Plant Inventory",
		description: "Using CRUD methods and MongoDB as a back-end, Plant Inventory allows users to create, update, and keep track of plants and their stock levels. Hosted on Heroku, the app also allows for image upload and use.",
		imageurl: "images/plantinventory.png",
		linkurl: "https://plantinventoryapp.herokuapp.com/",
		number: 0
	},
	{
		title: "Pub Landing Page",
		description: "This simple website was create to serve as single landing page for a small business.",
		imageurl: "images/westacrestag.png",
		linkurl: "https://metrollied.github.io/westacre-stag/",
		number: 1
	},
	{
		title: "React CV Generator",
		description: "By employing React states this app allows a user to create a CV that is then dynamically displayed based on the information entered by the user.",
		imageurl: "images/reactcvapp.png",
		linkurl: "https://metrollied.github.io/cv-app/",
		number: 2
	},
	{
		title: "React Memory Game",
		description: "This application employs React states to randomly generate a series of cards. The aim of the game is to click on the cards, avoiding any duplicates. The design is inspired by 'The Good Place'.",
		imageurl: "images/memorygame.png",
		linkurl: "https://metrollied.github.io/memory-game/",
		number: 3
	},
]

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log
  res.render('index', { items: items });
});

module.exports = router;

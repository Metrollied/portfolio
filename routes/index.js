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
	{
		title: "React Shop",
		description: "This is a single-page application shop demo, using React and Fake Store API. By using promises in conjunction with React states the site allows a user to add, remove, and view items in their basket (but not to checkout!)",
		imageurl: "images/shoppingapp.png",
		linkurl: "https://metrollied.github.io/shopping-app/",
		number: 4
	}
]

let icons = [
	{
		name: "HTML5",
		image: "images/icons/html.svg"
	},
	{
		name: "CSS3",
		image: "images/icons/css.svg"
	},
	{
		name: "JavaScript",
		image: "images/icons/javascript-programming-language.svg"
	},
	{
		name: "Pug",
		image: "images/icons/pug-icon.svg"
	},
	{
		name: "React",
		image: "images/icons/react-js.svg"
	},
	{
		name: "NodeJS",
		image: "images/icons/node-js.svg"
	},
	{
		name: "Express",
		image: "images/icons/expressjs.svg"
	},
	{
		name: "MongoDB",
		image: "images/icons/mongodb.svg"
	},
	{
		name: "Git",
		image: "images/icons/git.svg"
	},
	{
		name: "GitHub",
		image: "images/icons/github.svg"
	},
	{
		name: "NPM",
		image: "images/icons/npm.svg"
	},
	{
		name: "Webpack",
		image: "images/icons/webpack.svg"
	},
	{
		name: "Jest",
		image: "images/icons/jest.svg"
	},
	
]

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log
  res.render('index', { items: items, icons: icons });
});

module.exports = router;

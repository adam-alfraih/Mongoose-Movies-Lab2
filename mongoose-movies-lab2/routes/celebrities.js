const router = require("express").Router();
const Celebrity = require('../models/Celebrity')

// THIS LISTS THE CELEBS 
router.get('/celebrity', (req, res, next) => {
	// retrieve all the books from the db	
	Celebrity.find()
		.then(celebsFromDB => {
			console.log(celebsFromDB)
			// render the view
			res.render('celebrity/index', { celebList: celebsFromDB })
		})
		.catch(err => next(err))
	// res.send('hello')
});

// THIS IS FOR THE ID
// router.get('/celebrity/add', (req, res, next) => {
// 	res.render('celebrity/addForm')
// });

router.get('/celebrity/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findById(id)
		.then(celebsFromDB => {
			console.log(celebsFromDB)
			res.render('celebrity/show', { celebList: celebsFromDB })
		})
		.catch(err => next(err))
});


module.exports = router;
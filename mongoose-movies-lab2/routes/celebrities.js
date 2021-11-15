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




//THIS IS TO ADD NEW CELEBS
router.get('/celebrity/new', (req, res, next) => {
	res.render('celebrity/new')
});

router.post('/celebrity', (req, res, next) => {

	const { name, occupation, catchPhrase } = req.body
	// console.log(title, description, author, rating)

	// create a new book
	Celebrity.create({
		name: name,
		occupation: occupation,
		catchPhrase: catchPhrase,
	})
		.then(createdCeleb => {
			console.log(createdCeleb)
			// show the book details for the created book
			// res.render('books/details', { book: createdBook })
			res.redirect(`/celebrity/${createdCeleb._id}`)
		})
        
        .catch(err => next(err))
});




// THIS IS TO DELETE CELEBS
router.get('/celebrity/delete/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findByIdAndDelete(id)
		.then(() => {
			// redirect to the books list
			res.redirect('/celebrity')
		})
		.catch(err => {
			next(err)
		})
});



//THIS IS TO EDIT CELEBS
router.get('/celebrity/edit/:id', (req, res, next) => {
	const id = req.params.id
	// get the book with this id
	Celebrity.findById(id)
		.then(celebFromDB => {
			console.log(celebFromDB)
			// render a form to edit the boo
			res.render('celebrity/edit', { celeb: celebFromDB })
		})
		.catch(err => next(err))
});

router.post('/celebrity/edit/:id', (req, res, next) => {
	const id = req.params.id
	// retrieve the values from the request body
	const { name, occupation, catchPhrase } = req.body
	// find the book and update
	Celebrity.findByIdAndUpdate(id, {
		name,
		occupation,
		catchPhrase
	}, { new: true })
		.then(updatedCeleb => {
			console.log(updatedCeleb)
			// redirect to the details of the updated book
			res.redirect(`/celebrity/${updatedCeleb._id}`)
		})
		.catch(err => next(err))
});






// THIS IS FOR THE ID
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
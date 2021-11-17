const router = require("express").Router();
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')







// THIS LISTS THE MOVIES
router.get('/movies', (req, res, next) => {
	// retrieve all the books from the db	
	Movie.find()
		.then(moviesFromDB => {
			console.log(moviesFromDB)
			// render the view
			res.render('movies/index', { movieList: moviesFromDB })
		})
		
		.catch(err => next(err))
	// res.send('hello')
});




//THIS IS TO ADD NEW MOVIES
router.get('/movies/new', (req, res, next) => {
	Celebrity.find()
	.then(celebsFromDB => {
		res.render('movies/new', { celebList: celebsFromDB })
		
	})
	.catch(err => next(err))
});


router.post('/movies', (req, res, next) => {

	const { title, genre, plot } = req.body
	console.log(title, genre, plot)

	// create a new movie
	Movie.create({
		title: title,
		genre: genre,
		plot: plot,
        // cast: cast,
	})
		.then(createdMovie => {
			console.log(createdMovie)
			// show the book details for the created book
			// res.render('books/details', { book: createdBook })
			res.redirect(`/movies/${createdMovie._id}`)
		})
        
        .catch(err => next(err))
});




// // THIS IS TO DELETE CELEBS
// router.get('/celebrity/delete/:id', (req, res, next) => {
// 	const id = req.params.id
// 	Celebrity.findByIdAndDelete(id)
// 		.then(() => {
// 			// redirect to the books list
// 			res.redirect('/celebrity')
// 		})
// 		.catch(err => {
// 			next(err)
// 		})
// });



// //THIS IS TO EDIT CELEBS
// router.get('/celebrity/edit/:id', (req, res, next) => {
// 	const id = req.params.id
// 	// get the book with this id
// 	Celebrity.findById(id)
// 		.then(celebFromDB => {
// 			console.log(celebFromDB)
// 			// render a form to edit the boo
// 			res.render('celebrity/edit', { celeb: celebFromDB })
// 		})
// 		.catch(err => next(err))
// });

// router.post('/celebrity/edit/:id', (req, res, next) => {
// 	const id = req.params.id
// 	// retrieve the values from the request body
// 	const { name, occupation, catchPhrase } = req.body
// 	// find the book and update
// 	Celebrity.findByIdAndUpdate(id, {
// 		name,
// 		occupation,
// 		catchPhrase
// 	}, { new: true })
// 		.then(updatedCeleb => {
// 			console.log(updatedCeleb)
// 			// redirect to the details of the updated book
// 			res.redirect(`/celebrity/${updatedCeleb._id}`)
// 		})
// 		.catch(err => next(err))
// });






// // THIS IS FOR THE ID
// router.get('/celebrity/:id', (req, res, next) => {
// 	const id = req.params.id
// 	Celebrity.findById(id)
// 		.then(celebsFromDB => {
// 			console.log(celebsFromDB)
// 			res.render('celebrity/show', { celebList: celebsFromDB })
// 		})
// 		.catch(err => next(err))
// });


module.exports = router;
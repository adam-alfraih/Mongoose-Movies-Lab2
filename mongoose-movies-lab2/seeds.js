const mongoose = require('mongoose')
const Celebrity = require('./models/Celebrity')

// open up the connection to mongo
mongoose.connect('mongodb://localhost/mongoose-movies-lab2')

const celebrities = [
	{
		name: "Playboy Carti",
		occupation: "Rapper",
        catchPhrase: "slatt",
	},
    {
		name: "Paris Hilton",
		occupation: "Socialite",
        catchPhrase: "That's Hot.",
	},
    {
		name: "Saweetie",
		occupation: "Rapper",
        catchPhrase: "I know that's right!",
	},
	
]

Celebrity.insertMany(celebrities)
	.then(celebrity => {
		console.log(`Success! - ${celebrity.length} were added to the database`)
		// mongoose.connection.close()
	})
	.catch(err => console.log(err))





	// MOVIES

	// const movies = [
	// 	{
	// 		title: "Movies",
	// 		genre: "Movie Genre",
	// 		plot: "Plot Example",
	// 	}
	// ]


	Movie.insertMany(movies)
	.then(movie => {
		console.log(`Success! - ${celebrity.length} were added to the database`)
		// mongoose.connection.close()
	})
	.catch(err => console.log(err))
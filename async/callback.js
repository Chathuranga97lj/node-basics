const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovies = (id, cb) => {
    setTimeout(() => {
        const movie = movies.find((movie) => movie.id ===id);
        cb(movie);
    }, 1000);
}

const getReviews = () => {

}

const getUsers = () => {

}

// calback pattern 1
getMovies(3, (movie) => {
    console.log(movie);
})
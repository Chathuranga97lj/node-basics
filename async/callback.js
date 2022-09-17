const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovies = (id, cb) => {
    setTimeout(() => {
        const movie = movies.find((movie) => movie.id ===id);
        cb(movie);
    }, 1000);
};

const getReviews = (movieid, cb) => {
    setTimeout(() => {
        const review = reviews.find((review) => review.movie_id === movieid);
        cb(review);
    }, 1000);
};

const getUsers = (name, cb) => {
    setTimeout(() => {
        const user = users.find(user => user.name === name);
        cb(user);
    }, 1000);
};

// calback pattern 1
getMovies(3, (movie) => {
    // console.log(movie);
    getReviews(movie.id, (review) => {
        // console.log(review);
        getUsers(review.reviewer, (user) => {
            console.log(user);
        });
    });
})
const movies = require('./movies.json');
const reviews = require('./reviews.json');
const users = require('./users.json');

const getMovies = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movie = movies.find((movie) => movie.id ===id);
            if(movie){
                resolve(movie);
            } else {
                reject('Not found!');
            }
        }, 1000);
    });
};

const getReviews = (movieid) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const review = reviews.find((review) => review.movie_id === movieid);
            if(review){
                resolve(review);
            } else {
                reject('Not found review!');
            }
        }, 1000);
    }) 
};

const getUsers = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.name === name);
            if(user){
                resolve(user);
            } else {
                reject('Not found user !');
            }
        }, 1000);
    })
};


// // calback pattern 1 (Call back hell- not use this  type)
// getMovies(3, (movie) => {
//     // console.log(movie);
//     getReviews(movie.id, (review) => {
//         // console.log(review);
//         getUsers(review.reviewer, (user) => {
//             console.log(user);
//         });
//     });
// })

getMovies(1)
    .then(movie => {
        // console.log(movie);
        return getReviews(movie.id);
    })
    .then(review => {
        console.log(review);
    })
    .catch(err => {
        console.log(err)
    })
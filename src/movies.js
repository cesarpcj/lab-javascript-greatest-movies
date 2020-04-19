// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const data = require('./data.js');
const movies = data.movies;



function getAllDirectors(movies){
    const allDirectors = movies.map( movie => movie.director);
    
    return allDirectors;
}


function getAllDirectorsReduce(directors){
    return directors.reduce((arr, item) =>  arr.includes(item) ? arr : [...arr, item], []);   
}

function howManyMovies(movies){
    return movies.filter(movie => movie.director === "Steven Spielberg"  && movie.genre.includes("Drama"));
}

function ratesAverage(movies){
    return movies.reduce((acc , val, index, arr) =>{
        acc += val.rate;
        console.log();
        if(index === arr.length -1){
            return parseFloat((acc/arr.length).toFixed(1));
        }else{
            return acc;
        }
    }, 0)
}

function dramaMoviesRate(movies){
    return ratesAverage(movies.filter( movie => movie.genre.includes("Drama")));
}

/*We need to sort the movies in ascending order by their release year. 
This should be easy using one of the methods we have just learned. 
😉 Create a function orderByYear() that receives an array as parameter and returns a new sorted array.*/

function orderByYear(movies){
    return movies.sort((a,b) => {
        
        if(a.year > b.year){
            return 1;
        }else if(a.year < b.year){
            return -1;
        }else{
            if(a.title > b.title){
                return 1;
            }else{
                return -1;
            }
        }

    });
}



/*Another popular way to order the movies is to sort them alphabetically using the title key. 
However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, 
alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, 
return all of them.*/

function orderAlphabetically(movies){
    const sorted = movies.sort((a,b) =>{
        if(a.title > b.title){
            return 1;
        }else if(a.title < b.title){
            return -1;
        }else{
            return 0;
        }
    });
    
    return sorted.filter( (movie, index) => index < 20);

}
    
console.log(orderAlphabetically(movies));






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

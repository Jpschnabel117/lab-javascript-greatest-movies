// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorList = moviesArray.map((movie) => movie.director);
  let directorListUnique = directorList.filter(
    (director, index) => directorList.indexOf(director) === index
  );
  return directorListUnique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let totalscore = 0;
  for (const movie of moviesArray) {
    if (movie.score === undefined) {
      continue;
    }
    totalscore += movie.score;
  }
  return Math.round((totalscore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (
    moviesArray.length === 0 ||
    moviesArray.filter((movie) => movie.genre.includes("Drama")).length === 0
  ) {
    return 0;
  }
  let totalscore = 0;
  for (const movie of moviesArray) {
    if (movie.score === undefined) {
      continue;
    }
    if (movie.genre.includes("Drama")) {
      totalscore += movie.score;
    }
  }
  return (
    Math.round(
      (totalscore /
        moviesArray.filter((movie) => movie.genre.includes("Drama")).length) *
        100
    ) / 100
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyofMoviesArray = [...moviesArray];
  return copyofMoviesArray.sort(function compareFn(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyofMoviesArray = [...moviesArray];
  let twentyTitles = [];
  copyofMoviesArray.sort(function compareFn(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  for (let index = 0; index < copyofMoviesArray.length; index++) {
    if (index > 19) {
      break;
    }
    twentyTitles.push(copyofMoviesArray[index].title);
  }
  return twentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertHMtoM(hoursMin) {
  let result = 0;
  result = Number(hoursMin[0]) * 60;
  let slicedstring = hoursMin.slice(0, -3);
  let min = Number(slicedstring.slice(-2));
  result = result + min;
  return result;
}
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => ({
    ...movie,
    duration: convertHMtoM(movie.duration),
  }));

  console.log(newMoviesArray);
  return newMoviesArray;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const scoresByYear = moviesArray.reduce((a, c) => {
    if (a[c.year]) {
      a[c.year].score += c.score;
      a[c.year].count += 1;
    } else {
      a[c.year] = {
        score: c.score,
        count: 1,
      };
    }

    return a;
  }, {});

  let bestYear = 0;
  let resultScore = 0;
  const yearKeys = Object.keys(scoresByYear)
  for(let i = 0; i < yearKeys.length; i++){
    const singleYear = scoresByYear[yearKeys[i]];
    const avgSingleYear = singleYear.score / singleYear.count;
    if(avgSingleYear > resultScore) {
      bestYear = yearKeys[i];
      resultScore = avgSingleYear;
    }
  }

  console.log(scoresByYear);
  console.log(
    `The best year was ${bestYear} with an average score of ${resultScore}`
  );
  return `The best year was ${bestYear} with an average score of ${resultScore}`;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {
//   if (moviesArray.length === 0) {
//     return null;
//   }
//   let bestYear = 0;
//   let bestScoreAvg = 0;
//   let moviesArrayOBY = orderByYear(moviesArray);

//   for (let i = 0; i < moviesArrayOBY.length; i++) {
//     let localAvg = 0;
//     let localCount = 0;
//     let localSum = 0;
//     let x = 0;
//     for (
//       let j = i;
//       moviesArrayOBY[i].year === moviesArrayOBY[j].year &&
//       j < moviesArrayOBY.length;
//       j++
//     ) {
//       x = x + 1;
//       localCount += 1;
//       localSum = moviesArrayOBY[j].score + localSum;
//     }
//     //i += x;
//     localAvg = localSum / localCount;
//     if (bestScoreAvg < localAvg) {
//       bestScoreAvg = localAvg;
//       bestYear = moviesArrayOBY[i].year;
//     }
//   }
//   console.log(
//     `The best year was ${bestYear} with an average score of ${bestScoreAvg}`
//   );
//   return `The best year was ${bestYear} with an average score of ${bestScoreAvg}`;
// }

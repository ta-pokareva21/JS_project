for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = +prompt('Насколько оцените его?','');
    if ( a != null && b != null &&  a != '' && a.length <=50 && b !=''){
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}



console.log(personalMovieDB);

// 9.0 Async Await
const getMoviePromise = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`❌ ${e}`));
};

const getMovieAsync = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json")
    const json = await response.json();
    console.log(json);
};

getMovieAsync();

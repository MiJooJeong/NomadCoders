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
    // console.log(json);
};

getMovieAsync();


// 9.1 try catch finally
const getMovieAsync2 = async () => {
    try {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json")
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(`❌ ${error}`)
    } finally {
        console.log("We are done!");
    }
};

getMovieAsync2();

const apiKey = 'a7d6008'
let moviesName = document.getElementById('movie-name');
const searchBox =document.getElementById('searchBtn');
const searchResult = document.getElementById('movieResult');
// const errorMessage = document.getElementById('error-message');


//function to fetch api
let movieData = async () => {
    let movie = moviesName.value;
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    if (movie.length <= 0) {
        searchResult.innerHTML = `<h3 class="error" >Enter Movie Name </h3>`;
    }
     else {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        if (data.Response == 'True') {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
          searchResult.innerHTML =`
          <div class="more-info">
          <div class="card mt-3 border-0">
              <div class="row g-0">
                  <div class=" col-md-4 poster">
                      <img src=${data.Poster} class="img-fluid rounded-start  " alt="poster">
                  </div>
                  <div class="col-md-8 details">
                      <div class="card-body">                                       
                          <h1 class="card-title movieN">${data.Title}</h1>
                          <div class="card-text rating">
                              <img src="./imgs/Path Copy 4.svg" alt="">
                              <span>${data.imdbRating}</span>
                          </div>
                          <div class="card-text info">
                              <span>${data.Rated}</span>
                              <span>${data.Year}</span>
                              <span>${data.Runtime}</span>
                          </div>
                          <div class="genre card-text">
                              <div>${data.Genre.split(",").join("</div><div>")}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <h3>Plot:</h3>
      <p>${data.Plot}</p>
      <h3>Cast:</h3>
      <p>${data.Actors}</p> `
        
    }
// if exist      
        else{
            searchResult.innerHTML = `<h3 class="error" >${data.Error} </h3>`;
        } ; 
    
};
};
searchBox.addEventListener('click' , movieData)
movieData();
let allMovies = document.querySelector(".movies");

fetch("https://ghibliapi.herokuapp.com/films").then(function(response){
    return response.json();
})
.then(function(json){
    for(f of json){
        let filmBox = document.createElement("div");
        filmBox.classList.add("indivMovie");
        let titleBox = document.createElement("div");
        titleBox.classList.add("movieOne");
        let descriptionBox = document.createElement("div");
        descriptionBox.classList.add("movieTwo")
        titleBox.innerHTML = "<h3>" + f.title + "</h3>";
        descriptionBox.innerHTML = "<h4>Description:</h4> </br> <p>" + f.description + "</p>";
        filmBox.appendChild(titleBox);
        filmBox.appendChild(descriptionBox);
        allMovies.appendChild(filmBox);
    }
});

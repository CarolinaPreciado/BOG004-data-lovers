import { listaDePeliculas, datosDePeliculas } from "./data.js";

function addElemento(listaDePeliculas, datosDePeliculas) {
  let movieList = document.getElementById("movieList");

  for (let i = 0; i < listaDePeliculas.length; i++) {
    //Cree un div que va a contener a cada pelicula
    let div = document.createElement("div");
    div.setAttribute("id", "pelicula" + i);
    div.setAttribute("class", "contenedorDeCadaPelicula");
    movieList.appendChild(div);
    // Cree un elemento h3 que tendra el nombre de cada pelicula
    let movieName = document.createElement("h3");
    movieName.innerHTML = listaDePeliculas[i];
    div.appendChild(movieName);
    //Cree otro div que va a contener cada dato capturado de la pelicula
    let divMovieData = document.createElement("div");
    divMovieData.setAttribute("class", "contenedorDeDatos");
    div.appendChild(divMovieData);
    //Cree un div que va a contener la fecha de estreno de la pelicula
    let divRelaseDate = document.createElement("div");
    divRelaseDate.innerHTML =
      "Release date:" + datosDePeliculas[i]["release_date"];
    divRelaseDate.setAttribute("class", "contenedorDeFecha");
    divMovieData.appendChild(divRelaseDate);
    //Cree un div que va a contener el director de la pelicula
    let divDirector = document.createElement("div");
    divDirector.innerHTML = "Director:" + datosDePeliculas[i]["director"];
    divDirector.setAttribute("class", "contenedorDeDirector");
    divMovieData.appendChild(divDirector);
    //Cree un div que va a contener el puntaje de la pelicula
    let divRt_score = document.createElement("div");
    divRt_score.innerHTML = "Score:" + datosDePeliculas[i]["rt_score"];
    divRt_score.setAttribute("class", "contenedorPuntaje");
    divMovieData.appendChild(divRt_score);
    //Cree un elemento h3 que tendra los datos de cada pelicula año-director-puntaje
    /*let movieData = document.createElement("h3");
    movieData.innerHTML = datosDePeliculas[i];
    divMovieData.appendChild(movieData);*/
  }
}

/*function addElemento(listaDePeliculas, datosDePeliculas) {
  let movieList = document.getElementById("movieList");
  for (let i = 0; i < listaDePeliculas.length; i++) {
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    h3.innerHTML = listaDePeliculas[i];
    for (let j = 0; j < datosDePeliculas.length; j++) {
      p1.innerHTML = datosDePeliculas[j];
      p2.innerHTML = datosDePeliculas[1];
      p3.innerHTML = datosDePeliculas[2];
    }
    console.log(datosDePeliculas[i]);
    movieList.appendChild(h3);
    movieList.appendChild(p1);
    movieList.appendChild(p2);
    movieList.appendChild(p3);
  }
}*/

addElemento(listaDePeliculas(), datosDePeliculas());

//datosDePeliculas();

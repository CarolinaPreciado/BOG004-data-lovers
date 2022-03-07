import { datosDePeliculas, filtradoDeDirector } from "./data.js";

function addElemento(datosDePeliculas) {
  let movieList = document.getElementById("movieList");

  for (let i = 0; i < datosDePeliculas.length; i++) {
    //Cree un div que va a contener a cada pelicula
    let divEachMovie = document.createElement("div");
    divEachMovie.setAttribute("id", "pelicula" + i);
    divEachMovie.setAttribute("class", "contenedorDeCadaPelicula");
    movieList.appendChild(divEachMovie);

    //Cree un div que va a contener cada poster de pelicula
    let divPoster = document.createElement("div");
    divPoster.setAttribute("id", "posterDePelicula" + i);
    divPoster.setAttribute("class", "contendorDePosters");
    divEachMovie.appendChild(divPoster);

    //Cree una etiqueta de tipo imagen donde entrara cada poster de pelicula
    let poster = document.createElement("img");
    poster.setAttribute("src", datosDePeliculas[i]["poster"]);
    poster.setAttribute("width", "200px");
    poster.setAttribute("height", "286px");
    divPoster.appendChild(poster);

    // Cree un elemento h3 que tendra el nombre de cada pelicula
    let movieName = document.createElement("h3");
    movieName.innerHTML = datosDePeliculas[i]["title"];
    divEachMovie.appendChild(movieName);

    //Cree otro div que va a contener cada dato capturado de la pelicula
    let divMovieData = document.createElement("div");
    divMovieData.setAttribute("class", "contenedorDeDatos");
    divEachMovie.appendChild(divMovieData);

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
  }
}
//funcion para elegir director, leer su valor, filtrar la informacion y retornarla filtrada al usuario
function seleccionarDirector() {
  let eleccionDeDirectores = document.getElementById("eleccionDeDirectores");
  let directorElegido = eleccionDeDirectores.value;
  console.log(directorElegido);
  let dataFiltradaPorDirector = filtradoDeDirector(directorElegido);
  console.log(dataFiltradaPorDirector);

  //Declaro variable y hago un bucle para limpiar la pantalla
  let limpiarPantalla = document.getElementsByClassName(
    "contenedorDeCadaPelicula"
  );
  while (limpiarPantalla[0]) {
    limpiarPantalla[0].parentNode.removeChild(limpiarPantalla[0]);
  }

  addElemento(dataFiltradaPorDirector);
}

addElemento(datosDePeliculas());
document
  .getElementById("eleccionDeDirectores")
  .addEventListener("change", seleccionarDirector);

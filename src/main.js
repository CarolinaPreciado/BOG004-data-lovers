import {
  datosDePeliculas,
  filtradoDeDirector,
  ordenadoFecha,
  ordenadoPuntaje,
  ordenadoAZ,
} from "./data.js";

function addElemento(datosDePeliculas) {
  const movieList = document.getElementById("movieList");

  for (let i = 0; i < datosDePeliculas.length; i++) {
    //Cree un div que va a contener a cada pelicula
    const divEachMovie = document.createElement("div");
    divEachMovie.setAttribute("id", "pelicula" + i);
    divEachMovie.setAttribute("class", "contenedorDeCadaPelicula");
    movieList.appendChild(divEachMovie);

    //Cree un div que va a contener cada poster de pelicula
    const divPoster = document.createElement("div");
    divPoster.setAttribute("id", "posterDePelicula" + i);
    divPoster.setAttribute("class", "contendorDePosters");
    divEachMovie.appendChild(divPoster);

    //Cree una etiqueta de tipo imagen donde entrara cada poster de pelicula
    const poster = document.createElement("img");
    poster.setAttribute("src", datosDePeliculas[i]["poster"]);
    poster.setAttribute("width", "200px");
    poster.setAttribute("height", "286px");
    divPoster.appendChild(poster);

    // Cree un elemento h3 que tendra el nombre de cada pelicula
    const movieName = document.createElement("h3");
    movieName.innerHTML = datosDePeliculas[i]["title"];
    divEachMovie.appendChild(movieName);

    //Cree otro div que va a contener cada dato capturado de la pelicula
    const divMovieData = document.createElement("div");
    divMovieData.setAttribute("class", "contenedorDeDatos");
    divEachMovie.appendChild(divMovieData);

    //Cree un div que va a contener la fecha de estreno de la pelicula
    const divRelaseDate = document.createElement("div");
    divRelaseDate.innerHTML =
      "Release date:" + datosDePeliculas[i]["release_date"];
    divRelaseDate.setAttribute("class", "contenedorDeFecha");
    divMovieData.appendChild(divRelaseDate);

    //Cree un div que va a contener el director de la pelicula
    const divDirector = document.createElement("div");
    divDirector.innerHTML = "Director:" + datosDePeliculas[i]["director"];
    divDirector.setAttribute("class", "contenedorDeDirector");
    divMovieData.appendChild(divDirector);

    //Cree un div que va a contener el puntaje de la pelicula
    const divRt_score = document.createElement("div");
    divRt_score.innerHTML = "Score:" + datosDePeliculas[i]["rt_score"];
    divRt_score.setAttribute("class", "contenedorPuntaje");
    divMovieData.appendChild(divRt_score);
  }
}
//funcion para elegir director, leer su valor, filtrar la informacion y retornarla filtrada al usuario
function seleccionarDirector() {
  const eleccionDeDirectores = document.getElementById("eleccionDeDirectores");
  let directorElegido = eleccionDeDirectores.value;

  let dataFiltradaPorDirector = filtradoDeDirector(directorElegido);

  //Declaro variable y hago un bucle para limpiar la pantalla
  let limpiarPantalla = document.getElementsByClassName(
    "contenedorDeCadaPelicula"
  );
  while (limpiarPantalla[0]) {
    limpiarPantalla[0].parentNode.removeChild(limpiarPantalla[0]);
  }
  //Pintado de los elementos en la pantalla luego de seleccionar director
  addElemento(dataFiltradaPorDirector);
}
//llamado de la funcion de pintado en la pantalla inicial
addElemento(datosDePeliculas());

//Creado de evento para llamar la funcion de seleccionado de director
document
  .getElementById("eleccionDeDirectores")
  .addEventListener("change", seleccionarDirector);

//funcion para elegir el dato a ordenar, leer su valor, ordenar la informacion y retornarla ordenada al usuario
function ordenar() {
  const ordenarDato = document.getElementById("ordenadoDeDatos");
  let datoElegido = ordenarDato.value;

  let datosOrdenados = [];
  if (datoElegido === "Release date") {
    datosOrdenados = ordenadoFecha();
  }
  if (datoElegido === "Score") {
    datosOrdenados = ordenadoPuntaje();
  }
  if (datoElegido === "AZ") {
    datosOrdenados = ordenadoAZ();
  }

  //Declaro variable y hago un bucle para limpiar la pantalla
  let limpiarPantalla = document.getElementsByClassName(
    "contenedorDeCadaPelicula"
  );
  while (limpiarPantalla[0]) {
    limpiarPantalla[0].parentNode.removeChild(limpiarPantalla[0]);
  }
  //Pintado de los elementos en la paantalla luego de seleccionar el elemento a ordenar
  addElemento(datosOrdenados);
}
//Creado de evento para llamar la funcion de ordenar dato elegido
document.getElementById("ordenadoDeDatos").addEventListener("change", ordenar);

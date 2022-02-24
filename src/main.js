import { listaDePeliculas, datosDePeliculas } from "./data.js";

function addElemento(listaDePeliculas, datosDePeliculas) {
  let movieList = document.getElementById("movieList");

  for (let i = 0; i < listaDePeliculas.length; i++) {
    let div = document.createElement("div");
    let movieName = document.createElement("h3");
    let movieData = document.createElement("h3");
    div.setAttribute("id", "pelicula[i]");
    div.setAttribute("class", "contenedorDeCadaPelicula");
    movieName.innerHTML = listaDePeliculas[i];
    movieData.innerHTML = datosDePeliculas[i];
    movieList.appendChild(div);
    div.appendChild(movieName);
    div.appendChild(movieData);
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

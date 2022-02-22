import { listaDePeliculas } from "./data.js";

function addElemento(listaDePeliculas) {
  let movieList = document.getElementById("movieList");
  for (let i = 0; i < listaDePeliculas.length; i++) {
    let h3 = document.createElement("h3");
    h3.innerHTML = listaDePeliculas[i];
    movieList.appendChild(h3);
  }
}
addElemento(listaDePeliculas());

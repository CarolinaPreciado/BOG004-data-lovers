import data from "./data/ghibli/ghibli.js";

export function listaDePeliculas() {
  let peliculas = [];
  for (let i = 0; i < data["films"].length; i++) {
    peliculas.push(data["films"][i]["title"]);
  }
  return peliculas;
}

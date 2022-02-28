import data from "./data/ghibli/ghibli.js";

export function listaDePeliculas() {
  let peliculas = [];
  for (let i = 0; i < data["films"].length; i++) {
    peliculas.push(data["films"][i]["title"]);
  }
  return peliculas;
}

export function datosDePeliculas() {
  let datosPeliculas = [];
  for (let i = 0; i < data["films"].length; i++) {
    datosPeliculas.push({
      release_date: data["films"][i]["release_date"],
      director: data["films"][i]["director"],
      rt_score: data["films"][i]["rt_score"],
    });
  }

  return datosPeliculas;
}

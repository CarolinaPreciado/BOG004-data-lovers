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
      title: data["films"][i]["title"],
      release_date: data["films"][i]["release_date"],
      director: data["films"][i]["director"],
      rt_score: data["films"][i]["rt_score"],
      poster: data["films"][i]["poster"],
    });
  }
  return datosPeliculas;
}

export function filtradoDeDirector1(data) {
  if (data["director"] === "Hayao Miyazaki") return true;
  else {
  }
}
const filtroFinalDirector1 = data["films"].filter(filtradoDeDirector1);
console.log(filtroFinalDirector1);

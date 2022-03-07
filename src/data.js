import data from "./data/ghibli/ghibli.js";

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

export function filtradoDeDirector(director) {
  let data = datosDePeliculas();
  const filtroFinalDirector = data.filter(
    (pelicula) => pelicula["director"] === director
  );
  return filtroFinalDirector;
}

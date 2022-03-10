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
//funcion para ordenar datos por fecha de lanzamiento
export function ordenadoFecha() {
  let datosParaOrdenadoFecha = datosDePeliculas();

  datosParaOrdenadoFecha.sort((a, b) => {
    return b.release_date - a.release_date;
  });
  return datosParaOrdenadoFecha;
}

//funcion para ordenar datos por puntaje
export function ordenadoPuntaje() {
  let datosParaOrdenadoPuntaje = datosDePeliculas();

  datosParaOrdenadoPuntaje.sort((a, b) => {
    return b.rt_score - a.rt_score;
  });
  return datosParaOrdenadoPuntaje;
}

//funcion para ordenar datos por A-Z
export function ordenadoAZ() {
  let datosParaOrdenadoAZ = datosDePeliculas();

  datosParaOrdenadoAZ.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });
  return datosParaOrdenadoAZ;
}

import { describe } from "eslint/lib/rule-tester/rule-tester";
import {
  datosDePeliculas,
  filtradoDeDirector,
  ordenadoFecha,
  ordenadoPuntaje,
  ordenadoAZ,
} from "../src/data";

describe("datosDePeliculas", () => {
  it("is a function", () => {
    expect(typeof datosDePeliculas).toBe("function");
  });
  it("returns `datosDePeliculas`", () => {
    expect(typeof datosDePeliculas()).toBe("object");
  });
});

describe("filtradoDeDirector", () => {
  it("is a function", () => {
    expect(typeof filtradoDeDirector).toBe("function");
  });
  it("returns `filtradoDeDirector`", () => {
    expect(typeof filtradoDeDirector()).toBe("object");
  });
  describe("Matchers Arrays", () => {
    test("Hiroyuki Morita existe en el array", () => {
      let director = "Hiroyuki Morita";
      expect(filtradoDeDirector(director)[0].director).toContain(director);
    });
    test("El array director Hayao Miyazaki tiene 9 elementos", () => {
      let director = "Hayao Miyazaki";
      expect(filtradoDeDirector(director)).toHaveLength(9);
    });
    test("El array director Isao Takahata tiene 5 elementos", () => {
      let director = "Isao Takahata";
      expect(filtradoDeDirector(director)).toHaveLength(5);
    });
    test("El array director Yoshifumi Kondō tiene 1 elemento", () => {
      let director = "Yoshifumi Kondō";
      expect(filtradoDeDirector(director)).toHaveLength(1);
    });
    test("El array director Hiroyuki Morita tiene 1 elemento", () => {
      let director = "Hiroyuki Morita";
      expect(filtradoDeDirector(director)).toHaveLength(1);
    });
    test("El array director Gorō Miyazaki tiene 2 elementos", () => {
      let director = "Gorō Miyazaki";
      expect(filtradoDeDirector(director)).toHaveLength(2);
    });
    test("El array director Hiromasa Yonebayashi tiene 2 elementos", () => {
      let director = "Hiromasa Yonebayashi";
      expect(filtradoDeDirector(director)).toHaveLength(2);
    });
  });
});
let resultadoEsperadoOrdenamientoFecha = {
  title: "When Marnie Was There",
  director: "Hiromasa Yonebayashi",
  poster:
    "https://static.wikia.nocookie.net/studio-ghibli/images/7/7a/When_Marnie_Was_There.jpg",
  release_date: "2014",
  rt_score: "92",
};

describe("Ordenado por fecha", () => {
  it("is a function", () => {
    expect(typeof ordenadoFecha).toBe("function");
  });
  test("Ordenamiento de la data por fecha de mayor a menor", () => {
    expect(ordenadoFecha()[0]).toEqual(resultadoEsperadoOrdenamientoFecha);
  });
});

let resultadoEsperadoOrdenamientoPuntaje = {
  title: "Only Yesterday",
  director: "Isao Takahata",
  poster:
    "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
  release_date: "1991",
  rt_score: "100",
};
describe("Ordenado por puntaje", () => {
  it("is a function", () => {
    expect(typeof ordenadoPuntaje).toBe("function");
  });
  test("Ordenamiento de la data por puntaje de mayor a menor", () => {
    expect(ordenadoPuntaje()[0]).toEqual(resultadoEsperadoOrdenamientoPuntaje);
  });
});
let resultadoEsperadoOrdenamientoAZ = {
  title: "Castle in the Sky",
  director: "Hayao Miyazaki",
  poster:
    "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
  release_date: "1986",
  rt_score: "95",
};
describe("Ordenado por AZ", () => {
  it("is a function", () => {
    expect(typeof ordenadoAZ).toBe("function");
  });
  test("Ordenamiento de la data por orden alfabetico de A-Z", () => {
    expect(ordenadoAZ()[0]).toEqual(resultadoEsperadoOrdenamientoAZ);
  });
});

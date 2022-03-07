import { describe } from "eslint/lib/rule-tester/rule-tester";
import { datosDePeliculas, filtradoDeDirector } from "../src/data";

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

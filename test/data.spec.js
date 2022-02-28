import { describe } from "eslint/lib/rule-tester/rule-tester";
import { listaDePeliculas, datosDePeliculas } from "../src/data";

describe("listaDePeliculas", () => {
  it("is a function", () => {
    expect(typeof listaDePeliculas).toBe("function");
  });
  it("returns `lista de peliculas`", () => {
    let peliculas = [
      "Castle in the Sky",
      "My Neighbor Totoro",
      "Kiki's Delivery Service",
      "Grave of the Fireflies",
      "Only Yesterday",
      "Porco Rosso",
      "Pom Poko",
      "Whisper of the Heart",
      "Princess Mononoke",
      "My Neighbors the Yamadas",
      "Spirited Away",
      "The Cat Returns",
      "Howl's Moving Castle",
      "Tales from Earthsea",
      "Ponyo on the Cliff by the Sea",
      "The Secret World of Arrietty",
      "From Up on Poppy Hill",
      "The Wind Rises",
      "The Tale of the Princess Kaguya",
      "When Marnie Was There",
    ];
    expect(listaDePeliculas()).toStrictEqual(peliculas);
  });
});

describe("datosDePeliculas", () => {
  it("is a function", () => {
    expect(typeof datosDePeliculas).toBe("function");
  });
  it("returns `datosDePeliculas`", () => {
    expect(typeof datosDePeliculas()).toBe("object");
  });
});


import { conceptTrad, languageTrad } from "../data/types";
import {tradConcepts, tradLanguages} from "./tranduction"


const concept: conceptTrad = {
  fr: {
    name: "concept name in french",
    description: "description in french"
  }
}

describe("tradConcepts", () => {
  it('when ask french and exist, return it', () => {
      const res = tradConcepts([concept])("fr");
  

      expect(res.length).toBe(1);

      const {name, description} = res[0];
      expect(name).toBe("concept name in french");
      expect(description).toBe("description in french")
    });

})



describe("tradLanguages", () => {
  it('returns languages', () => {
      const language: languageTrad = {
        name: "language",
        concepts: [],
        paragism: [],
        philosophies: [],
        syntax: []
      }

      const res = tradLanguages([language])("fr");
  

      expect(res.length).toBe(1);

      const {name} = res[0];
      expect(name).toBe("language");
    });

  it("language's concept is translated", () => {
    const language: languageTrad = {
      name: "language",
      concepts: [concept],
      paragism: [],
      philosophies: [],
      syntax: []
    }

    const res = tradLanguages([language])("fr");


    expect(res.length).toBe(1);

    const {concepts} = res[0];
    expect(concepts.length).toBe(1);

    const {name, description} = concepts[0]
    expect(name).toBe("concept name in french");
    expect(description).toBe("description in french")
  })
})


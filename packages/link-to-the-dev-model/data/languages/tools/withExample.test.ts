import { conceptData, conceptTrad } from "../../types";
import { withExample } from "./withExample"

const conceptValue: conceptData = {
    name: "name",
    description: "description"
}

it("add an example in each concept", () => {
    const concept: conceptTrad = {
        en: conceptValue,
        fr: conceptValue
    }

    const res = withExample(concept, "example");

    expect(res.en.example).toBe("example")
    expect(res.fr.example).toBe("example")
})

it("return existings concept values", () => {
    const concept: conceptTrad = {
        en: conceptValue
    }
    
    const res = withExample(concept, "example");
    
    const {example: eEn, ...restEn} = res.en;
    expect(restEn).toStrictEqual(concept.en)
})

it("have no side effect", () => {
    const concept: conceptTrad = {
        en: conceptValue
    }
    const json = JSON.stringify(concept)
    
    withExample(concept, "example");
    
    expect(JSON.stringify(concept)).toBe(json);
})

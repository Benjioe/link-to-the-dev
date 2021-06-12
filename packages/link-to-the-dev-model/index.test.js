
import { getModel } from "./index";

/**
 * @type {import("./data/types").concept[]}
 */
const _concepts = [{
        name: "concept",
        description: "description"
}];

/**
 * @type {import("./data/types").language[]}
 */
const _languages = [{
    name: "language",
    concepts: _concepts,
    paragism: [],
    philosophies: [],
    syntax: []
}];

const emptyArrayFunc = () => [];

it('return languages', () => {
    const languageFunc = () => _languages;

    const {languages} = getModel(languageFunc, emptyArrayFunc)("en");

    expect(languages).toStrictEqual(_languages)
});

it('return concept', () => {
    const conceptFunc = () => _concepts;

    const {concepts} = getModel(emptyArrayFunc, conceptFunc)("en");

    expect(concepts.length).toBe(1);

    const {name, description} = concepts[0];
    expect(name).toBe("concept");
    expect(description).toBe("description");
});

it('add to each concept, the languages using this one', () => {
    const conceptFunc = () => _concepts;
    const languageFunc = () => _languages;

    const {concepts} = getModel(languageFunc, conceptFunc)("en");

    expect(concepts[0].languages).toStrictEqual(_languages)
})
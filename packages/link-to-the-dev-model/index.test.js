
import { getModel } from "./index";

/**
 * @type {import("./data/types").conceptData}
 */
const _concept = {
    name: "concept",
    description: "description"
};
const _concepts = [_concept];


/**
 * @returns {import("./data/types").languageData}
 */
const createLanguages = (concepts) => [{
    name: "language",
    concepts,
    paragism: [],
    philosophies: [],
    syntax: []
}];
const _languages = createLanguages(_concepts);

const emptyArrayFunc = () => [];

it('return languages', () => {
    const languageFunc = () => _languages;

    const {languages} = getModel(languageFunc, emptyArrayFunc)("en");

    expect(languages).toStrictEqual(_languages)
});

it('when languages.concepts have alias, use it in name', () => {
    const languageFunc = () => createLanguages([{
        ..._concept,
        alias: "alias"
    }]);

    const {languages} = getModel(languageFunc, emptyArrayFunc)("en");

    const {name} = languages[0].concepts[0];
    expect(name).toBe("alias (concept)")
})


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
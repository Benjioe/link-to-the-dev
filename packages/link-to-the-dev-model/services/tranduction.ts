import type {languageData, conceptData, languageTrad, modelTrad, translation, tradFunc, languageCode } from "../data/types"

export type getLanguage = (langue: languageCode) => languageData[]; 
export type getConcepts = (langue: languageCode) => conceptData[];

export const tradLanguages = (languages: modelTrad["languages"]): getLanguage => 
    (langue: languageCode) => 
        languages
            .map(tradLanguageProperties( getTrad(langue) ));

const tradLanguageProperties = (trad: tradFunc) => 
    ({ concepts, paragism, philosophies, syntax, ...rest }: languageTrad) => ({
        ...rest,
        concepts: trad(concepts),
        paragism: trad(paragism),
        philosophies: trad(philosophies),
        syntax: trad(syntax)
    });


export const tradConcepts = (concepts: modelTrad["concepts"]): getConcepts => 
    (langue: languageCode) =>
        getTrad(langue)(concepts)
    

const getTrad = (langue: languageCode): tradFunc =>
    (links) =>
        Object.entries(links)
            .map( ([_, value]) => value[langue])
            .filter(keepNotNull);

const keepNotNull = <T>(item: T | undefined): item is T => 
    item !== undefined || item !== null;      


//todo : créer un getTradConcept qui connais les propriété à traduire

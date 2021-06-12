import type {language, outputModel } from "./types"
import {languageData, languageCode} from "./data/types"

import {tradLanguages, tradConcepts, getConcepts, getLanguage} from "./services/tranduction"
import {data} from "./data"


const formate = ({ concepts, ...language }: languageData): language => ({
    concepts: concepts.map(({ concept, ...forLanguage }) => ({
        ...concept,
        ...forLanguage,
    })),
    ...language
});

export const getModel = (getLanguage: getLanguage, getConcepts: getConcepts) => 
    (langue: languageCode): outputModel => {
        const languages = getLanguage(langue).map(formate);


        return {
            languages,
            concepts: getConcepts(langue).map(x => ({
                ...x,
                languages: languages.filter(l => l.concepts.map(x => x.name).includes(x.name))
            }))
        }
    }

export default getModel(
    tradLanguages(data.languages), 
    tradConcepts(data.concepts)
);
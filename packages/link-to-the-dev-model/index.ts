import type { language, outputModel, concept } from "./types"
import { languageCode, languageData, conceptData} from "./data/types"

import {tradLanguages, tradConcepts, getConcepts, getLanguage} from "./services/tranduction"
import {data} from "./data"


export const getModel = (getLanguage: getLanguage, getConcepts: getConcepts) => 
    (langue: languageCode): outputModel => {
        const languages = getLanguage(langue);


        return {
            languages: languages
                .map(useConceptAlias),
            concepts: getConcepts(langue).map(withLanguage(languages))
        }
    }

export default getModel(
    tradLanguages(data.languages), 
    tradConcepts(data.concepts)
);

const withLanguage = (languages: languageData[]) => (x: conceptData): concept => ({
    ...x,
    languages: languages.filter(l => l.concepts.map(x => x.name).includes(x.name))
})

const useConceptAlias = ({ concepts, ...langage }: languageData): language => ({
    ...langage,
    concepts: concepts.map(({ name, alias, ...concept }) => ({
        ...concept,
        name: alias ? `${alias} (${name})` 
            : name
    }))
})
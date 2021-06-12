import * as t from "./data/types"

export type language = Omit<t.languageData, "concepts"> & {
    concepts: (t.conceptData & {
        example: string
    })[]
};
export type paragism = t.paragismData;
export type syntax = t.syntaxData;
export type philosophy = t.philosophy;
export type concept = t.conceptData & {
    languages: language[]
}


type outputModel = {
    languages: language[]
    concepts: concept[]
}
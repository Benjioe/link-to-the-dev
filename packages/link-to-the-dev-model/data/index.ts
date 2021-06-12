import * as concepts from "./concepts"
import * as languages from "./languages/index"
import * as paragism from "./paragism"
import * as philosophies from "./philosophies"
import * as syntax from "./syntax"

import type {modelTrad} from "./types" 

export const data: modelTrad = {
    concepts: Object.values(concepts),
    languages: Object.values(languages),
    paragisms: Object.values(paragism),
    philosophies: Object.values(philosophies),
    syntaxes: Object.values(syntax)
}
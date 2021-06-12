import type {languageTrad} from "../types"
import {destructuring, patternMatching} from "../concepts"
import {prefixNotation} from "../syntax"
import { functional } from "../paragism"
import { firstClassFunction } from "../philosophies";
import { withExample } from "./tools/withExample";

export const clojure: languageTrad = {
    name: "clojure",
    concepts: [
        withExample(destructuring,
            `(let [[first _ third] [0 1 2]]
                [third first])
              ;; => [2 0]`), 

        withExample(patternMatching,
            `(defn myinc
                ([x] (myinc x 1))
                ([x increment]
                (+ x increment)))
        `)
    ],
    philosophies: [firstClassFunction],
    syntax: [prefixNotation],
    paragism: [functional]
};





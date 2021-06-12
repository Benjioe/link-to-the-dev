import type {languageTrad} from "../types"
import {destructuring, patternMatching} from "../concepts"
import {prefixNotation} from "../syntax"
import { functional } from "../paragism"
import { firstClassFunction } from "../philosophies";
import { withExample } from "./tools/withExample";
import { comprehensionList } from "../concepts/comprehension-list";

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
        `),
        withExample(comprehensionList, 
            `(for [x [1 2 3]
                y [4 5]
                :when (= (+ x y) 6)]
            [x y])
            ;; => ([1 5] [2 4])`)
    ],
    philosophies: [firstClassFunction],
    syntax: [prefixNotation],
    paragism: [functional]
};





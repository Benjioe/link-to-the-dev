//#region data


export type modelData = {
    languages : languageData[];
    concepts : conceptData[];
    paragisms : paragismData[];
    syntaxes : syntaxData[];
    philosophies : philosophy[];
}


export type languageData = {
    name: string,
    paragism: paragismData[],
    philosophies: philosophy[],
    syntax: syntaxData[],
    concepts: conceptLanguage[],
};

type conceptLanguage = conceptData & {
    example: string;
    alias?: string
}

export type paragismData = {
    name: string
    description: string
};

export type syntaxData = {
    name: string
    description: string
};
export type conceptData = {
    name: string
    description: string
};



export type philosophy = {
    name: string
    description: string
};

export type code = string;
export type url = string;

export type link = conceptLanguage | languageData | paragismData | philosophy | syntaxData | conceptData;

//#endregion


//#region Trad

export type modelTrad = {
    languages : languageTrad[];
    concepts : conceptTrad[];
    paragisms : paragismTrad[];
    syntaxes : syntaxTrad[];
    philosophies : philosophyTrad[];
}


// Peut-on définir un format pour avoir toujours une valeur par default
export type languageTrad = translation<languageData>;
export type paragismTrad = translations<paragismData>;
export type syntaxTrad = translations<syntaxData>;
export type conceptTrad = translations<conceptData>;
export type philosophyTrad = translations<philosophy>;


export type param=  {
    language: languageCode
}


export type translation<T> = {
    [P in keyof T]: translationArray<T[P]>;
}

export type translations<T> = dicoLanguage<translation<T>>;

type translationArray<T> = T extends (infer U)[] 
    ? U extends link
        ? translations<U>[]
        : never
    : T ;

//#endregion

export type dicoLanguage<T> = {
    fr?: T;
    en?: T;
};

export type languageCode = keyof dicoLanguage<any>;
export type tradFunc = <T>(links: dicoLanguage<T>[]) => T[];

import type {language} from "link-to-the-dev-model/types"

type paramLanguages = {
    languages: language[]
}
type paramLanguage = {
    language: language
}


export const Languages = ({languages}: paramLanguages) => 
    <div>
        {languages
            .map(l => <Language language={l} key={l.name} />)}
    </div>

const Language = ({language}: paramLanguage) => {
    const {name} = language;
    console.log(language.concepts)
    return (
        <div id={name}>
            <h2>{name}</h2>
            <h3>Concepts</h3>
            <ul>
                {language.concepts.map(({name, example}) => 
                    <li key={name}>
                        <a href={`#${name}`}>{name}</a><br />
                        <code>
                            {example}
                        </code>
                    </li>)}
            </ul>
        </div>)
}
    
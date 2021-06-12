import type {concept} from "link-to-the-dev-model/types"

type paramConcepts = {
    concepts: concept[]
}

export const Concepts = ({concepts}: paramConcepts) =>{
    return (
    <div>
        {concepts
            .map(c => <Concept concept={c} key={c.name} />)}
    </div>)
}


type paramConcept = {
    concept: concept
}

const Concept = ({concept}: paramConcept) => {
    const {name, languages,description } = concept;
    return (
        <div id={name}>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Utilisé par</h3>
            <ul>
                {languages.map(({name}) => 
                    <li key={name}>
                        <a href={`#${name}`}>{name}</a>
                    </li>)}
            </ul>
        </div>)
}
    
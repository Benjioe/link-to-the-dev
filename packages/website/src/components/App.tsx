import getModel from "link-to-the-dev-model/out/index";
import { Concepts } from "./concepts";
import { Languages } from "./languages";

function App() {
  const {languages, concepts} = getModel("fr");
  console.log(concepts);
  return (
    <div className="App">
      <h1>Languages</h1>
      <Languages languages={languages} />

      <h1>Concepts</h1>
      <Concepts concepts={concepts} />
    </div>
  );
}

export default App;

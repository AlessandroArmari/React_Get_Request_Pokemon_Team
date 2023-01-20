import { useState } from "react";
import { PkmnList } from "./components/PkmnList";
import "./App.css";
function App() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchOrderHandler() {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        //--->response is a promise!
        "https://ad42ea69-6901-43e3-a8b4-67bdeeeaf70b.mock.pstmn.io/lance"
      );
      if (!response.ok) {
        //check later!!!!
        throw new Error("I am an Error: Something went wrong");
      }
      const data = await response.json();
      const dataMapped = data.lanceTeam.map((pkmn) => {
        return {
          name: pkmn.name,
          pokedexIndex: pkmn.pokedexIndex,
          type: pkmn.type,
          generation: pkmn.generation,
          sprite: pkmn.sprite,
        }; //--->REMEMBER: YOU'RE GETTING THE LIST WICH IS THE VALUE OF THE FIRST PROPERTY (lanceTeam) OF DATA
      });

      setTeam(dataMapped);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }

    setIsLoading(false);
  }

  //+++HERE the function "fetchOrderHandler" ends!

  let content = <div></div>; //NOT CONST--->BECAUSE IT CHANGES

  if (team.length > 0) {
    content = <PkmnList listOfPkmn={team} />;
  }

  if (isLoading) {
    content = <p>Is Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <div className="body">
      <section>
        {content}
        <div className="buttonSection">
          <button onClick={fetchOrderHandler}>Show Lance Team</button>
        </div>
      </section>
    </div>
  );
}

export default App;

//TO DO:

// modifica stile waiting e errore

//implementa your team!

/*
const content = [
  {
    "lanceTeam": [
      {
        "name": "Gyarados",
        "pokedexIndex": "130",
        "type": "Water/Flying",
        "generation": "First",
      },
      {
        "name": "Dragonair",
        "pokedexIndex": "148",
        "type": "Dragon",
        "generation": "First",
      },
      {
        "name": "Dragonair",
        "pokedexIndex": "148",
        "type": "Dragon",
        "generation": "First",
      },
    ],
  },
];
*/

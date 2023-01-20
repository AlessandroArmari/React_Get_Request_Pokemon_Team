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
        "https://41c08f6e-537f-409f-be34-acffb4aa24c2.mock.pstmn.io/lance"
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
        }; //--->REMEMBER: YOU'RE GETTING THE LIST WICH IS THE VALUE OF THE FIRST PROPERTY (lanceTeam) OF DATA
      });

      setTeam(dataMapped);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }

    setIsLoading(false);
  }

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

//https://598af871-ba3e-45e4-bb7a-9a2734d63e54.mock.pstmn.io/lance/team

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

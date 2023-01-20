import { PkmnList } from "./components/PkmnList";

const fetchOrderHandler = async () => {
  let response = await fetch(
    //--->response is a promise!
    "https://8b8a7efc-aebc-4f2c-9490-2ee25d831326.mock.pstmn.io/team/lance"
  );
  if (response.ok != 200) {
    //check later!!!!
    throw new Error("I am an Error: Something went wrong");
  }
};

function App() {
  return (
    <>
      <section>
        <button onClick={fetchOrderHandler}>Show Lance Team</button>{" "}
        {/*button to fetch*/}
        <section>
          <div>response</div>
        </section>{" "}
        {/*place to show stuff */}
      </section>
    </>
  );
}

export default App;

//https://8b8a7efc-aebc-4f2c-9490-2ee25d831326.mock.pstmn.io/team/lance

/*
const content = [
  {
    lanceTeam: [
      {
        name: "Gyarados",
        pokedexIndex: "130",
        type: "Water/Flying",
        generation: "First",
      },
      {
        name: "Dragonair",
        pokedexIndex: "148",
        type: "Dragon",
        generation: "First",
      },
      {
        name: "Dragonair",
        pokedexIndex: "148",
        type: "Dragon",
        generation: "First",
      },
    ],
  },
];
*/

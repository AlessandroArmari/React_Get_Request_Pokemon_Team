import "./style/Pkmn.css";

const Pkmn = (props) => {
  return (
    <>
      <li className="li">
        <h2>{props.name}</h2>
        <div>
          <span>Number:</span> {props.pokedexIndex}
        </div>
        <div>
          <span>Type:</span> {props.type}
        </div>
        <div className="lastDiv">
          <span>Generation:</span> {props.generation}
        </div>
      </li>
    </>
  );
};

export { Pkmn };

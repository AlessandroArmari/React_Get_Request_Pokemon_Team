const Pkmn = (props) => {
  return (
    <>
      <li>
        <h2>{props.name}</h2>
        <div>{props.pokedexIndex}</div>
        <div>{props.type}</div>
        <div>{props.generation}</div>
      </li>
    </>
  );
};

export { Pkmn };

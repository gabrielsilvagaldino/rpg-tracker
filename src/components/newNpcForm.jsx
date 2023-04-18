import { useContext } from "react";
import AppContext from "../context/AppContext";

function Form() {
  const {
    name, 
    setName,
    initiative,
    setInitiative,
    armor,
    setArmor,
    health,
    setHealth,
    formOnClick,
  } = useContext(AppContext);

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input id="name" value={ name } onChange={(e) => setName(e.target.value)} type="text" />
      </label>
      <label htmlFor="initiative">
        Iniciativa
        <input id="initiative" value={ initiative } onChange={(e) => setInitiative(e.target.value)}  type="number" />
      </label>
      <label htmlFor="armor">
        Armadura
        <input id="armor" value={ armor } onChange={(e) => setArmor(e.target.value)}  type="number" />
      </label>
      <label htmlFor="health">
        Vida Máx.
        <input id="health" value={ health } onChange={(e) => setHealth(e.target.value)}  type="number" />
      </label>
      <button type="button" onClick={ formOnClick }>
        Criar
      </button>
    </form>
  )
}

export default Form;
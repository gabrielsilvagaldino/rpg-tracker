import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function NpcCard(props) {
  const { removeButton, array, setArray, setUpdate, update } = useContext(AppContext);
  const [input, setInput] = useState(1);
  const { character, index } = props;

  const increaseButton = (index) => {
    if (input === 0 || !input) {
      setInput(1)
      array[index].atualHealth += 1 
      console.log(array);
      setArray(array)
      return setUpdate(update + 1)
    }

    array[index].atualHealth += Number(input)
    setArray(array)
    setUpdate(update + 1)
  }

  const decreaseButton = (index) => {
    if (input === 0 || !input) {
      setInput(1)
      array[index].atualHealth -= 1 
      console.log(array);
      setArray(array)
      return setUpdate(update + 1)
    }

    array[index].atualHealth -= Number(input)
    setArray(array)
    setUpdate(update + 1)
  }

  return (
    <div>
      <img src={ character.image } alt="custom-image" />
      <table>
        <thead>
          <tr>
            <th>Iniciativa</th>
            <th>Classe de Armadura</th>
            <th> </th>
            <th>Vida/</th>
            <th>Vida Max.</th>
          </tr>
        </thead>
        <tbody>
          <th>{ character.initiative }</th>
          <th>{ character.armor }</th>
          <button type="button"  onClick={ () => decreaseButton(index) }>
            -
          </button>
          <th>{ character.atualHealth }</th>
          <th>{ character.health }</th>
          <button type="button" onClick={ () => increaseButton(index) }>
            +
          </button>
          <label htmlFor="increaseOrDecrease">
            <input id="increaseOrDecrease" type="number" value={ input } onChange={ (e) => setInput(e.target.value) }/>
          </label>
          <button type="button" onClick={ () => removeButton(character.id) }>X</button>
        </tbody>
      </table>
    </div>
  );
}

export default NpcCard;

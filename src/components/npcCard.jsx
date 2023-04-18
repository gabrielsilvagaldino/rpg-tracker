import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function NpcCard(props) {
  const { increaseButton, decreaseButton } = useContext(AppContext);
  const { array, index } = props;
  return (
    <div>
      <img src={ array.image } alt="custom-image" />
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
          <th>{ array.initiative }</th>
          <th>{ array.armor }</th>
          <button type="button" onClick={ () => increaseButton(index) }>
            +
          </button>
          <th>{ array.atualHealth }</th>
          <th>{ array.health }</th>
          <button type="button"  onClick={ () => decreaseButton(index) }>
            -
          </button>
          <button>X</button>
        </tbody>
      </table>
    </div>
  );
}

export default NpcCard;

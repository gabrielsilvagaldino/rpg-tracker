import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function NpcCard(props) {
  const { increaseButton, decreaseButton, array } = useContext(AppContext);
  const { index } = props;
  return (
    <div>
      <img src={ array[index].image } alt="custom-image" />
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
          <th>{ array[index].initiative }</th>
          <th>{ array[index].armor }</th>
          <button type="button" onClick={ increaseButton }>
            +
          </button>
          <th>{ array[index].atualHealth }</th>
          <th>{ array[index].health }</th>
          <button type="button"  onClick={ decreaseButton }>
            -
          </button>
          <button>X</button>
        </tbody>
      </table>
    </div>
  );
}

export default NpcCard;

function NpcCard() {
  return (
    <div>
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
          <th>11</th>
          <th>12</th>
          <button type="button">
            +
          </button>
          <th>13</th>
          <th>15</th>
          <button type="button">
            -
          </button>
          <button>X</button>
        </tbody>
      </table>
    </div>
  );
}

export default NpcCard;

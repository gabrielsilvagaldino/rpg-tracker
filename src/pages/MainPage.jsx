import { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import NpcCard from "../components/npcCard";
import Form from "../components/newNpcForm";

function MainPage() {
  const { array } = useContext(AppContext);
  return (
    <main>
      <body>
        <Header />
        <Form />
        { (!array ? <div>Nenhum personagem feito ainda</div> : array.map((item, index) => (
          <NpcCard key={ item.id } index={ index }  />
        ))) }
      </body>
    </main>
  );
}

export default MainPage;

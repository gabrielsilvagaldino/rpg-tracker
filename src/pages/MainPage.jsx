import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import NpcCard from "../components/npcCard";
import Form from "../components/newNpcForm";

function MainPage() {
  const { array, setUpdate, update } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(array)
  }, [update])

  useEffect(() => {
    setUpdate(update + 1)
    const timer1 = setTimeout(() => setIsLoading(true), 500);
    
    return () => {
      clearTimeout(timer1);
    };
  }, [])


  return (
    <main>
      {
        !isLoading ? <div>Loading...</div> : (
          <body>
            <Header />
            <Form />
            { characters.length === 0  ? <div>Nenhum item encontrado</div> : characters.map((item, index) => (
              <NpcCard key={ item.id } index={ index } character={ item } />
            )) }
          </body>
        )
      }
    </main>
  );
}

export default MainPage;

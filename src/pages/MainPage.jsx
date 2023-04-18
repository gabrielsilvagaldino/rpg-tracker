import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import NpcCard from "../components/npcCard";
import Form from "../components/newNpcForm";

function MainPage() {
  const { array } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
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
            { array.length === 0  ? <div>Nenhum item encontrado</div> : array.map((item, index) => (
              <NpcCard key={ item.id } index={ index } array={ item } />
            )) }
          </body>
        )
      }
    </main>
  );
}

export default MainPage;

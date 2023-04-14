import Header from "../components/Header";
import NpcCard from "../components/npcCard";
import Form from "../components/newNpcForm";

function MainPage() {
  return (
    <main>
      <body>
        <Header />
        <Form />
        <NpcCard/>
      </body>
    </main>
  );
}

export default MainPage;

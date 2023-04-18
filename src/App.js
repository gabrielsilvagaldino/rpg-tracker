import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={ MainPage }/>
    </Routes>
  );
}

export default App;

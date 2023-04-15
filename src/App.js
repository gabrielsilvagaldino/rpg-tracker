import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" Component={ MainPage }/>
      </Routes>
    </Provider>
  );
}

export default App;

import "./style/App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { useState, createContext } from "react";
import { defaultBoard } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{ board, setBoard }}>
        <Grid />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;

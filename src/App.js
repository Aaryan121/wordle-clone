import "./style/App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { useState, createContext } from "react";
import { defaultBoard } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;

    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
  };

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;

    const newBoard = [...board];

    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);

    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };
  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPos > 4) return;

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;

    setBoard(newBoard);

    setCurrentAttempt({
      ...currentAttempt,
      attempt: currentAttempt.attempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };
  return (
    <div className="App">
      <Header />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
        }}
      >
        <div className="game">
          <Grid />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

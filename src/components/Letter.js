import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currentAttempt } = useContext(AppContext);
  const Letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === Letter;
  const almost = !correct && Letter !== "" && correctWord.includes(Letter);

  const letterState =
    currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState}>
      {Letter}
    </div>
  );
}

export default Letter;

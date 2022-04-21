import React, { useContext } from "react";
import { defaultBoard } from "./Words";
import { AppContext } from "../App";

function Letter({ letterpos, attemptVal }) {
  const { board, setBoard } = useContext(AppContext);
  const Letter = board[letterpos][attemptVal];

  return <div className="letter">{Letter}</div>;
}

export default Letter;

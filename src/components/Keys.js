import React, { useContext } from "react";
import { AppContext } from "../App";

function Keys({ keyValue }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue == "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return <div onClick={selectLetter}>{keyValue}</div>;
}

export default Keys;

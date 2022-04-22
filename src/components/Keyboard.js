import React, { useEffect, useCallback, useContext } from "react";
import Keys from "./Keys";
import { AppContext } from "../App";

function Keyboard() {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handelKeyboard = useCallback((event) => {
    if (event.key == "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      key1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      key2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      key3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handelKeyboard);
    return () => {
      document.removeEventListener("keydown", handelKeyboard);
    };
  }, [handelKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handelKeyboard}>
      <div className="line1">
        {key1.map((key) => {
          return <Keys keyValue={key} />;
        })}
      </div>
      <div className="line2">
        {key2.map((key) => {
          return <Keys keyValue={key} />;
        })}
      </div>
      <div className="line3">
        <Keys keyValue={"ENTER"} bigkey />
        {key3.map((key) => {
          return <Keys keyValue={key} />;
        })}
        <Keys keyValue={"DELETE"} bigkey />
      </div>
    </div>
  );
}

export default Keyboard;

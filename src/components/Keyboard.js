import React, { useEffect, useCallback, useContext } from "react";
import Keys from "./Keys";
import { AppContext } from "../App";

function keyboard() {
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
        if (event.key === key) {
          onSelectLetter(key);
        }
      });
      key2.forEach((key) => {
        if (event.key === key) {
          onselect(key);
        }
      });
      key3.forEach((key) => {
        if (event.key === key) {
          onselect(key);
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
    <div onKeyDown={handelKeyboard}>
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
        {key3.map((key) => {
          return <Keys keyValue={key} />;
        })}
      </div>
    </div>
  );
}

export default keyboard;

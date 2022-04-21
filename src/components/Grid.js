import React from "react";
import Letter from "./Letter";

function grid() {
  return (
    <div className="grid">
      <div className="row">
        <Letter letterpos={0} attemptVal={0} />
        <Letter letterpos={1} attemptVal={0} />
        <Letter letterpos={2} attemptVal={0} />
        <Letter letterpos={3} attemptVal={0} />
        <Letter letterpos={4} attemptVal={0} />
      </div>
      <div className="row">
        <Letter letterpos={0} attemptVal={1} />
        <Letter letterpos={1} attemptVal={1} />
        <Letter letterpos={2} attemptVal={1} />
        <Letter letterpos={3} attemptVal={1} />
        <Letter letterpos={4} attemptVal={1} />
      </div>
      <div className="row">
        <Letter letterpos={0} attemptVal={2} />
        <Letter letterpos={1} attemptVal={2} />
        <Letter letterpos={2} attemptVal={2} />
        <Letter letterpos={3} attemptVal={2} />
        <Letter letterpos={4} attemptVal={2} />
      </div>
      <div className="row">
        {" "}
        <Letter letterpos={0} attemptVal={3} />
        <Letter letterpos={1} attemptVal={3} />
        <Letter letterpos={2} attemptVal={3} />
        <Letter letterpos={3} attemptVal={3} />
        <Letter letterpos={4} attemptVal={3} />
      </div>
      <div className="row">
        {" "}
        <Letter letterpos={0} attemptVal={4} />
        <Letter letterpos={1} attemptVal={4} />
        <Letter letterpos={2} attemptVal={4} />
        <Letter letterpos={3} attemptVal={4} />
        <Letter letterpos={4} attemptVal={4} />
      </div>
      <div className="row">
        {" "}
        <Letter letterpos={0} attemptVal={5} />
        <Letter letterpos={1} attemptVal={5} />
        <Letter letterpos={2} attemptVal={5} />
        <Letter letterpos={3} attemptVal={5} />
        <Letter letterpos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default grid;

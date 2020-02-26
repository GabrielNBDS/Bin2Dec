import React, { useState } from "react";
import "./styles.scss";

export default function Converter() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  let sum = 0;
  let inputAux;
  let length = "";

  return (
    <div className="container">
      <p>
        binary code here <i title="1 or 0, no spaces" className="fa fa-question-circle"></i>
      </p>
      <form
        onSubmit={async e => {
          e.preventDefault();
          sum = 0;

          inputAux = input;
          
          length = input.length;

          for (var i = 0; i < length; i++) {
            sum += (inputAux % 2) * (2 ** i);
            inputAux = Math.floor(inputAux / 10);
          }

          setTotal(sum);
        }}
      >
        <input
          type="text"
          value={input}
          pattern="[0-1]{1,8}"
          onChange={e => setInput(e.target.value)}
          maxLength={8}
        />
        <button type="submit">convert</button>
      </form>
      <span className="total">{total}</span>
    </div>
  );
}

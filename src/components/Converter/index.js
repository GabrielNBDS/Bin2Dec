import React, { useState } from "react";
import "./styles.scss";

export default function Converter() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  let sum = 0;

  return (
    <div className="container">
      <p>
        binary code here <i title="1 or 0, no spaces" className="fa fa-question-circle"></i>
      </p>
      <form
        onSubmit={async e => {
          let inputAux = input.split("");
          sum = 0;

          e.preventDefault();

          for (var i = 0; i < input.length; i++) {
            sum += Number(inputAux[i]) * Math.pow(2, input.length - 1 - i);
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

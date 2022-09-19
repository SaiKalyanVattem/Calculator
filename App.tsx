import React, { useState } from 'react';
import './style.css';
function App() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const total = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };
  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button onClick={backSpace} id="backSpace">
          C
        </button>
        <button name="/" onClick={handleSubmit}>
          /
        </button>
        <button name="7" onClick={handleSubmit}>
          7
        </button>
        <button name="8" onClick={handleSubmit}>
          8
        </button>
        <button name="9" onClick={handleSubmit}>
          9
        </button>
        <button name="*" onClick={handleSubmit}>
          *
        </button>
        <button name="6" onClick={handleSubmit}>
          6
        </button>
        <button name="5" onClick={handleSubmit}>
          5
        </button>
        <button name="4" onClick={handleSubmit}>
          4
        </button>
        <button name="-" onClick={handleSubmit}>
          -
        </button>
        <button name="3" onClick={handleSubmit}>
          3
        </button>
        <button name="2" onClick={handleSubmit}>
          2
        </button>
        <button name="1" onClick={handleSubmit}>
          1
        </button>
        <button onClick={handleSubmit}>+</button>
        <button name="+" onClick={handleSubmit}>
          0
        </button>
        <button onClick={total} id="total">
          =
        </button>
        <button name="." onClick={handleSubmit}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;

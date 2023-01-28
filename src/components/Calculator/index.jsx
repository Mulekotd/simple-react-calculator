import React, { useState } from 'react';
import * as math from 'mathjs';
import './Calculator.css';

export default function Calculator() {

    const operations = ['*', '/', '+', '.', '-'];
    const [input, setInput] = useState("");

    function addNum(value) {
        setInput(input + value);
    }

    function insertOperation(value) {
        if (input === "" || (operations.includes(input[input.length - 1]) && operations.includes(val))) {
          return;
        } else {
          setInput(input + value);
        }
    }

    function calculate() {
        if (input === "" || operations.includes(input[input.length - 1])) {
          return input;
        } else {
          setInput(math.evaluate(input));
        }
    }
    
    return (
        <div className="calculator">
            <div className="display">
                <Button isInput>{input}</Button>
            </div>

            <Button className="col-3" onClick={() => setInput("")}>C</Button>
            <Button className="col-1" onClick={() => setInput(input.slice(-input.length, -1))}>&larr;</Button>
            <Button className="operador" onClick={insertOperation}>/</Button>
            <Button className="number" onClick={addNum}>7</Button>
            <Button className="number" onClick={addNum}>8</Button>
            <Button className="number" onClick={addNum}>9</Button>
            <Button className="operador" onClick={insertOperation}>*</Button>
            <Button className="number" onClick={addNum}>4</Button>
            <Button className="number" onClick={addNum}>5</Button>
            <Button className="number" onClick={addNum}>6</Button>
            <Button className="operador" onClick={insertOperation}>-</Button>
            <Button className="number" onClick={addNum}>1</Button>
            <Button className="number" onClick={addNum}>2</Button>
            <Button className="number" onClick={addNum}>3</Button>
            <Button className="operador" onClick={insertOperation}>+</Button>
            <Button className="col-2 number" onClick={addNum}>0</Button>
            <Button className="number" onClick={insertOperation}>.</Button>
            <Button className="operador" onClick={calculate}>=</Button>
        </div>  
    );
}

const Button = ({ children, onClick, isInput }) => {
    const isNum = (value) => {
      if (!isNaN(value) || value === "C" || value === "." ) {
        return true;
      }
      return false;
    };
  
    const isEqual = (value) => {
      if (value === "=" || value === "C" ) {
        return true;
      }
      return false;
    };
  
    return (
      <>
        {isInput ? (
          <div className="display">{children}</div>
        ) : (
          <button
            className={`col-1 ${
              isEqual(children) ? "col-2" : null
            } ${isNum(children) ? null : "col-1"}`}
            onClick={() => onClick(children)}
          >
            {children}
          </button>
        )}
      </>
    );
};
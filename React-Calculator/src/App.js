import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState("");

  const handle = (e) => {
    setCount(count.concat(e.target.id));
  };
  const clear = () => { 
    setCount("");
  };
  const backspace = () => {
    setCount(count.slice(0, -1));
  };
  const evaluate = () => {  
    try{
      setCount(eval(count).toString())
    }
    catch(err){
      setCount("error")
    }
    
  }
  // useEffect(() =>
  // {
  //   console.log("useeffect called");
  // },[count])
  return (
    <div className="App">
      <div className="keypad">
        <h1>Calculator</h1>
        <div className="work">
        <form className="form">
              <input type="text" value={count} />
            </form>
          <div className="keys">
            <button onClick={clear} className="operator" id="clear">
              clear
            </button>
            <button onClick={backspace} className="operator" id="c">
              c
            </button>
            <button onClick={handle} className="operator" id="%">
              %
            </button>
            <button onClick={handle} className="operator" id="/">
              /
            </button>
            <button onClick={handle} className="number" id="7">
              7
            </button>
            <button onClick={handle} className="number" id="8">
              8
            </button>
            <button onClick={handle} className="number" id="9">
              9
            </button>
            <button onClick={handle} className="operator" id="*">
              *
            </button>
            <button onClick={handle} className="number" id="4">
              4
            </button>
            <button onClick={handle} className="number" id="5">
              5
            </button>
            <button onClick={handle} className="number" id="6">
              6
            </button>
            <button onClick={handle} className="operator" id="-">
              -
            </button>
            <button onClick={handle} className="number" id="1">
              1
            </button>
            <button onClick={handle} className="number" id="2">
              2
            </button>
            <button onClick={handle} className="number" id="3">
              3
            </button>
            <button onClick={handle} className="operator" id="+">
              +
            </button>
            <button onClick={handle} className="operator" ></button>
            <button onClick={handle} className="number" id="0">
              0
            </button>
            <button onClick={handle} className="operator" id=".">
              .
            </button>
            <button onClick={evaluate} className="operator" id="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


import "./styles.css";
import Card from "./Card";
import { countryDict } from "./Data";
import { useState } from "react";

export default function App() {
  var [choice, setChoice] = useState("India");
  function cntHandler(item) {
    console.log(item);
    setChoice(item);
  }
  return (
    <div className="App">
      <h2 className="head">Travel - o - Mania</h2>
      <div className="btn_bar">
        <button className="btn" onClick={() => cntHandler("India")}>
          Back Home
        </button>
        <button className="btn" onClick={() => cntHandler("Europe")}>
          Europe
        </button>
        <button className="btn" onClick={() => cntHandler("America")}>
          The Americas
        </button>
      </div>
      {countryDict[choice].map((item) => {
        return (
          <Card title={item.title} content={item.content} img={item.img} />
        );
      })}
    </div>
  );
}

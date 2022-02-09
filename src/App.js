import { useState } from "react";
import "./styles.css";
import Garage from "./Garage.js";

const garatgeDia = ["Citroen C3", "Fiat 500", "Toyota Yaris"];
const garatgeFS = ["Peugeot 208", "Seat Leon"];

export default function App() {
  const [buttonText, setButtonText] = useState("clica");
  const [garage, setGarage] = useState(garatgeDia);

  const changeText = () => {
    buttonText === "Dia"
      ? (setButtonText("FS"), setGarage(garatgeFS))
      : (setButtonText("Dia"), setGarage(garatgeDia));
  };

  return (
    <body>
      <div className="App">
        <button onClick={changeText}>{buttonText}</button>
        <h3>
          <Garage cotxe={garage} />
        </h3>
      </div>
    </body>
  );
}

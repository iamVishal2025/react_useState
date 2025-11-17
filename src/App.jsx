import "./App.css";
import { useState } from "react";

function App() {
  let [textToShow, setTextToShow] = useState("Hello World"); // state to hold the text

  function onKeyDown(event) {
    console.log(`${textToShow}`);
    // textToShow = event.target.value;
    console.log(event);
    setTextToShow(event.target.value);
  }

  return (
    <>
      <input type="text" placeholder="please enter" onKeyDown={onKeyDown} />
      <p>{textToShow}</p>
    </>
  );
}

export default App;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [isOnLight, setIsOnLight] = useState(true)
  // console.log(isOnLight)
  const handleEvent = () =>{
    setIsOnLight((isOnLight) => !isOnLight)
  }
  let appClass = isOnLight ?  "App light":"App dark" 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleEvent}>{isOnLight ? "App light":"App dark"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

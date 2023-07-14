import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "4136e6df";
  const APP_KEY = "9c46189d68f90ac8c9264560e0231180";

  useEffect(() => {}, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="App">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;

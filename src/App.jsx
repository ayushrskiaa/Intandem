import React from "react";
import MapComponent from "./components/map.jsx";
import "./App.css";

function App() {
  return (
    <div className="title-main">
      <h1 className="title">
        VEHICLE STOPPAGE IDENTIFICATION AND VISUALIZATION
      </h1>
      <MapComponent />
    </div>
  );
}

export default App;

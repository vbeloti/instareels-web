import React from "react";
import "./App.css";
import logo from './assets/img/logo.png';
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>

      <div className="app__top">
        <img src={logo} alt="Instagram Logo" className="app__logo"/>
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

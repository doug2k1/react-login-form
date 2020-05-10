import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <LoginForm />
    </div>
  );
}

export default App;

import React, {useState} from "react";
// import React from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  const [ setInputText] = useState("youssef");
  return (
    <div className="App">
      <Header />
      <Home setInputText={setInputText} />
    </div>
  );
}

export default App;

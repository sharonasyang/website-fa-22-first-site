import logo from './logo.svg';
import React from "react";
import './App.css';
//import { Route } from 'react-router-dom';
import { Route } from 'react';
import { Navbar } from 'react';
import { Routes } from 'react';
import FoodTable from "./FoodTable";
import Food_Form from "./Food_Form";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FoodTable/>} />
        <Route path="/create" element={<Food_Form/>} />
      </Routes>
    </div>
  );
 };

export default App;

// import React from "react";
 
// // We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";
 
// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import RecordList from "./components/recordList";
// import Create from "./components/create";
 
// const App = () => {
//  return (
//    <div>
//      <Navbar />
//      <Routes>
//        <Route exact path="/" element={<RecordList />} />
//        <Route path="/create" element={<Create />} />
//      </Routes>
//    </div>
//  );
// };
 
// export default App;

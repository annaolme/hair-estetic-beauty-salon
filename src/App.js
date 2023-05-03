
import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
//import {Routes, Route} from "react-router-dom";
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import AdminNavLink from './components/Admin/AdminNavlink';
  const App = (props) => {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main HairPriceData={props.appState.HairPriceData}
                BodyCarePriceData={props.appState.BodyCarePriceData}
                EyesPriceData = {props.appState.EyesPriceData}
                DyeHairPriceData = {props.appState.DyeHairPriceData}
                NailPriceData = {props.appState.NailPriceData}
                WaxPriceData = {props.appState.WaxPriceData}
                CrewPeople = {props.appState.CrewPeople}
          />
          <Footer />
          
        </div>
      </BrowserRouter>
  );
}

export default App;

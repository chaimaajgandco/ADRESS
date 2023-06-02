import { Component } from "react";
import "./App.css";
import Haut  from "./components/header"
import AdresseTable from "./components/address"
import Foot from "./components/footer"


class App extends Component {
  render () {
    return (
      <div className="App">
        <Haut />
        <h1>Adresse</h1>
        <AdresseTable />
        <Foot />
      </div>
    );
  }
}

export default App;
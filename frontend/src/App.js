import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Container } from "shards-react";
import FormExample from "./Components/DrinkForm";

function App() {
  return (
    <div className="App">
      <h1>BarBot</h1>
      <h5>The automated drink dispenser.</h5>
      <Card style={{marginTop: "30px"}}>
        <Container style={{padding: "15px"}}><FormExample></FormExample></Container>
      </Card>
    </div>
  );
}

export default App;

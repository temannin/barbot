import React from "react";
import "./App.css";
import { Card, Container } from "shards-react";
import FormExample from "./Components/DrinkForm";

import { Badge, Button } from "@geist-ui/react";

function App() {

  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <div className="App">
      <h2>BarBot</h2>
      <h5>The automated drink dispenser.</h5>
      <Card style={{ marginTop: "20px" }}>
        <Container style={{ padding: "15px" }}>
          <FormExample></FormExample>
        </Container>
      </Card>
      <Button
        type="success"
        auto
        block
        loading={isLoading}
        style={{ marginTop: 30, width: "100%" }}
        onClick={() => {setIsLoading(true)}}
      >
        Send to BarBot
      </Button>
    </div>
  );
}

export default App;

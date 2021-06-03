import React, { useEffect } from "react";
import "./App.css";
import { Card, CardHeader, Container } from "shards-react";
import FormExample from "./Components/DrinkForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button, Col, Grid, Row, Select, Text } from "@geist-ui/react";

function App() {
  return (
    <div className="App">
      <h2>BarBot</h2>
      <h5>The automated drink dispenser.</h5>
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Main() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div>
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
        onClick={() => {
          fetch("/api/v1/tend", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ drink: "tyler" }),
          });
        }}
      >
        Send to BarBot
      </Button>
    </div>
  );
}

function Settings() {
  const [pumps, setPumps] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/v1/settings", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPumps(data);
      });
  }, []);

  useEffect(() => {
    console.log(pumps);
  }, [pumps]);

  function handler(pumpIdx, e) {
    let newPumps = JSON.parse(JSON.stringify(pumps));
    newPumps[pumpIdx] = { value: e };
    setPumps(newPumps);
  }

  const rows = pumps.reduce(function (rows, key, index) {
    key["index"] = index;

    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div>
      <Card style={{ marginTop: "20px" }}>
        <CardHeader>Pump Configuration</CardHeader>
        <Grid.Container gap={0.8} style={{ padding: "8px" }}>
          {rows.map((row) => (
            <Grid xs={24}>
              {row.map((pump, idx) => (
                <Grid xs={12}>
                  <Select
                    value={pump.value ? pump.value : ""}
                    placeholder="Choose one"
                    onChange={(e) => {
                      handler(pump.index, e);
                    }}
                    size="medium"
                  >
                    <Select.Option value="gin">Gin</Select.Option>
                    <Select.Option value="tequila">Tequila</Select.Option>
                    <Select.Option value="coke">Coca-Cola</Select.Option>
                    <Select.Option value="oj">Orange Juice</Select.Option>
                    <Select.Option value="barcardi">Bacardi</Select.Option>
                  </Select>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid.Container>
      </Card>
      <Button
        type="success"
        auto
        block
        style={{ marginTop: 20, width: "100%" }}
        onClick={() => {
          fetch("/api/v1/settings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(pumps)
          });
        }}
      >
        Save Settings
      </Button>
    </div>
  );
}

export default App;

import React from "react";
import { Card, Container } from "shards-react";
import DrinkCard from "./DrinkCard";

export default function DrinkSelector() {
  return (
    <Container
      style={{
        marginTop: 20,
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <DrinkCard name="Vodka Cranberry"></DrinkCard>
      <DrinkCard name="Vodka Cranberry"></DrinkCard>
      <DrinkCard name="Vodka Cranberry"></DrinkCard>
      <DrinkCard name="Vodka Cranberry"></DrinkCard>
    </Container>
  );
}

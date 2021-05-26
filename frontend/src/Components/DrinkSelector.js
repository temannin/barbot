import React from "react";
import { Card, Container } from "shards-react";
import DrinkCard from "./DrinkCard";

export default function DrinkSelector() {
  const [drink, setDrink] = React.useState(1);

  return (
    <Container
      style={{
        marginTop: 20,
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        padding: 15
      }}
    >
      <DrinkCard
        id={1}
        setter={setDrink}
        selected={drink === 1}
        name="Vodka Cranberry"
        description="Cocktail consisting of vodka and cranberry juice."
      ></DrinkCard>
      <DrinkCard
        id={2}
        setter={setDrink}
        selected={drink === 2}
        name="Vodka Cranberry"
        description="Cocktail consisting of vodka and cranberry juice."
      ></DrinkCard>
    </Container>
  );
}

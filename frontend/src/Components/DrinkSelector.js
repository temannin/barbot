import React, { useEffect } from "react";
import { Container } from "shards-react";
import DrinkCard from "./DrinkCard";
import { Card, Input, Spacer } from "@geist-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useLunr } from "react-lunr";
import lunr from "lunr";

export default function DrinkSelector() {
  const [drinkSelected, setDrinkSelected] = React.useState(null);
  const [drinkList, setDrinkList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const idx = lunr(function () {
    this.field("name");
    this.field("description");
    this.ref("id");

    for (let i = 0; i < drinkList.length; i++) {
      this.add(drinkList[i]);
    }
  });

  const result = idx.search(searchTerm + "*");

  useEffect(() => {
    fetch("/api/v1/drinks")
      .then((response) => response.json())
      .then((data) => {
        setDrinkList(data);
      });
  }, []);

  var filter = [];
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    
    var test = drinkList.find(obj => {
      return obj.id === Number.parseInt(element.ref)
    })
    filter.push(test)
  }

  const content = filter.map((drink, index) => (
    <DrinkCard
      id={drink.id}
      setter={setDrinkSelected}
      selected={drinkSelected === drink.id}
      name={drink.name}
      description={drink.description}
      src={drink.src}
    ></DrinkCard>
  ));

  return (
    <Card style={{ marginTop: 8 }}>
      <Card.Content style={{ paddingTop: 15, padding: 15, paddingBottom: 0 }}>
        <Input
          label="Drink Search"
          width="100%"
          iconRight={<AiOutlineSearch />}
          placeholder="Vodka Cranberry"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <Spacer></Spacer>
      </Card.Content>
      <Card.Content style={{ padding: 0 }}>
        <Container
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {content}
        </Container>
      </Card.Content>
    </Card>
  );
}

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";

import { Badge, Button } from "@geist-ui/react";

export default function DrinkCard(props) {
  let size = 220;

  console.log(props);

  return (
    <div style={{ display: "inline-block", marginLeft: 25, padding: 5 }}>
      <Card style={{ maxWidth: size }}>
        <CardImg
          style={{
            maxWidth: size,
            maxHeight: size,
            width: "auto",
            height: "auto",
          }}
          src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vodka-Cranberry-001.jpg"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <p
            style={{
              width: 150,
              whiteSpace: "break-spaces",
            }}
          >
            {props.description}
          </p>
          <Button
            disabled={props.selected}
            color="green"
            auto
            size="small"
            type="success"
            onClick={(e) => {
              props.setter(props.id);
            }}
          >
            {props.selected ? "Selected" : "Select"}
          </Button>
          <Badge style={{backgroundColor: "#2ecc71", marginLeft: 8}} type="success">In Stock</Badge>
        </CardBody>
      </Card>
    </div>
  );
}

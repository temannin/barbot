import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

export default function DrinkCard(props) {
  return (
    <div style={{ display: "inline-block", marginLeft: 25, padding: 5 }}>
      <Card style={{ maxWidth: "250px" }}>
        <CardImg src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vodka-Cranberry-001.jpg" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <p
            style={{
              width: 220,
              whiteSpace: "break-spaces",
            }}
          >
            Lorem ipsum dolor sit amet. I hope this wraps for some reason
          </p>
          <Button
            onClick={(e) => {
              console.log("test");
            }}
          >
            Send to BarBot!
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

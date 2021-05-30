import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";

import { Badge, Button, Tooltip } from "@geist-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

export default function DrinkCard(props) {

  return (
    <div style={{ display: "inline-block", padding: 5 }}>
      <Card style={{ maxWidth: 210 }}>
        <CardImg
          style={{
            objectFit: "cover",
            maxWidth: 210,
            width: "auto",
            height: 120,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
          src={props.src}
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <p
            style={{
              width: 150,
              whiteSpace: "break-spaces",
              minHeight: 50,
              maxHeight: 50,
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
          <Tooltip text={"This drink is in stock :)"} style={{opacity: "100"}}>
            <AiFillCheckCircle
              style={{
                marginLeft: -5,
                padding: 3,
                width: 50,
                height: 30,
                fill: "#2ecc71",
              }}
            ></AiFillCheckCircle>
          </Tooltip>
        </CardBody>
      </Card>
    </div>
  );
}

import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";
import DrinkSelector from "./DrinkSelector";

export default function FormExample() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="#name">Who's this drink for?</label>
        <FormInput id="#name" placeholder="Jane Doe" />
        <DrinkSelector></DrinkSelector>
      </FormGroup>
    </Form>
  );
}
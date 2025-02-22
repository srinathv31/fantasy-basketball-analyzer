"use client";

import Form from "next/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function PlayerForm() {
  return (
    <Form action="/player">
      <Input name="player-name" placeholder="Enter player name ..." />
      <Button>Submit</Button>
    </Form>
  );
}

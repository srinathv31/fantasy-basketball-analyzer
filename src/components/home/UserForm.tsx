"use client";

import Form from "next/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function UserForm() {
  return (
    <Form action="/sleeper/user" className="space-y-4 w-full">
      <Input
        name="username"
        placeholder="Enter your Sleeper username ..."
        className="w-full"
      />
      <Button>Submit</Button>
    </Form>
  );
}

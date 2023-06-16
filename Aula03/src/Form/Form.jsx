import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <>
      <form>
        <Input id="email" label="Email" />
        <Input id="password" label="Password" type="password" required />
        <Button />
      </form>
    </>
  );
}

export default Form;

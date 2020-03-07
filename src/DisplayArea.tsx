import React from "react";
import { useFormFieldStore } from "./store/useFormField";

const DisplayArea = () => {
  const { values } = useFormFieldStore();

  return (
    <div>
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
      {values.phone && <p>Phone: {values.phone}</p>}
      {values.age && <p>Age: {values.age}</p>}
    </div>
  );
};

export default DisplayArea;

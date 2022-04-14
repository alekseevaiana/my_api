import { useState } from "react";
import Popup from "./Popup";
import { TextField, SelectField, Button } from "@aws-amplify/ui-react";

export default function CreateIngredient({ onChange, onClose }) {
  const [name, setName] = useState("");
  const [ingredientType, setIngredientType] = useState("Other");

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange({ name, ingredientType });
  };

  return (
    <Popup title="Add new ingredient" onClose={onClose}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          placeholder="Name of ingredient"
          onChange={(event) => setName(event.target.value)}
        />
        <SelectField
          label="Type"
          onChange={(event) => setIngredientType(event.target.value)}
          style={{ marginBottom: "10px" }}
        >
          <option value="Other">Other</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Fruits">Fruits</option>
        </SelectField>
        <Button variation="primary" type="submit">
          Save
        </Button>
      </form>
    </Popup>
  );
}

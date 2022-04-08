import { useState } from "react";
import Popup from "./Popup";
import { TextField, SelectField, Button } from "@aws-amplify/ui-react";

export default function UpdateIngredient({
  currentIngredient,
  onChange,
  onClose,
  handleUpdate,
  handleDelete,
}) {
  const [name, setName] = useState(currentIngredient.name);
  const [ingredientType, setIngredientType] = useState(currentIngredient.type);

  const handleSubmit = (event) => {
    event.preventDefault();
    // update old ingredient
    onChange({ name, ingredientType });
  };

  return (
    <Popup title="Update item" onClose={onClose}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          placeholder="Galadriel"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <SelectField
          style={{ marginBottom: "10px" }}
          label="Type"
          onChange={(event) => setIngredientType(event.target.value)}
          value={ingredientType}
        >
          <option value="Other">Other</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Fruits">Fruits</option>
        </SelectField>
        <Button
          variation="primary"
          style={{ marginRight: "10px" }}
          onClick={() =>
            handleUpdate(
              currentIngredient._version,
              currentIngredient.id,
              currentIngredient.name,
              currentIngredient.type
            )
          }
        >
          Save
        </Button>
        <Button
          variation="primary"
          onClick={() =>
            handleDelete(currentIngredient._version, currentIngredient.id)
          }
        >
          Delete
        </Button>
      </form>
    </Popup>
  );
}

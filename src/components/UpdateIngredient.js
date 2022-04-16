import { useState } from "react";
import Popup from "./Popup";
import { TextField, SelectField, Button } from "@aws-amplify/ui-react";

export default function UpdateIngredient({
  currentIngredient,
  onChange,
  onDelete,
  onClose,
}) {
  const [name, setName] = useState(
    currentIngredient ? currentIngredient.name : ""
  );
  const [ingredientType, setIngredientType] = useState(
    currentIngredient ? currentIngredient.type : ""
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ingr type: ", ingredientType);
    console.log("current ingr: ", currentIngredient);
    const updated = { ...currentIngredient, type: ingredientType, name };
    console.log("updated: ", updated);
    onChange(updated);
  };

  return (
    <>
      {currentIngredient && (
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
              type="submit"
            >
              Save
            </Button>
            <Button
              variation="primary"
              onClick={() => onDelete(currentIngredient)}
            >
              Delete
            </Button>
          </form>
        </Popup>
      )}
    </>
  );
}

import { useState } from "react";

export default function UpdateIngredient() {
  const [name, setName] = useState();
  return (
    <Popup
      title="Update item"
      onClose={() => setUpdateCard(false)}
      display={updateCard ? "block" : "none"}
    >
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
      >
        <option value="Other">Other</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Fruits">Fruits</option>
      </SelectField>
      <Button
        variation="primary"
        style={{ marginRight: "10px" }}
        onClick={() => handleUpdate(currentV, current, name, ingredientType)}
      >
        Save
      </Button>
      <Button
        variation="primary"
        onClick={() => handleDelete(currentV, current)}
      >
        Delete
      </Button>
    </Popup>
  );
}

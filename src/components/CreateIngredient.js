export default function CreateIngredient() {
  return (
    <Popup
      title="Add new ingredient"
      onClose={() => setAddCard(false)}
      display={addCard ? "block" : "none"}
    >
      <TextField
        label="Name"
        placeholder="Galadriel"
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
      <Button
        variation="primary"
        onClick={() => handleSave(name, ingredientType)}
      >
        Save
      </Button>
    </Popup>
  );
}

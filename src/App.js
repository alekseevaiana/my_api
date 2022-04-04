import { withAuthenticator } from "@aws-amplify/ui-react";
import Nav from "./ui-components/Nav";
import { useEffect, useState } from "react";
import { TextField, SelectField, Button } from "@aws-amplify/ui-react";

import { API } from "aws-amplify";
import { listIngredients } from "./graphql/queries";
import {
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from "./graphql/mutations";

import IngridientItem from "./ui-components/IngridientItem";
import Popup from "./components/Popup";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [current, setCurrent] = useState();
  const [currentV, setCurrentV] = useState();

  const [addCard, setAddCard] = useState(false);
  const [updateCard, setUpdateCard] = useState(false);
  const [name, setName] = useState("");
  const [ingredientType, setIngredientType] = useState("Other");

  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listIngredients });
      console.log(data.data.listIngredients.items);
      setIngredients(data.data.listIngredients.items);
    };
    pullData();
  }, []);

  const style = {
    wrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "30px",
    },
    item: {
      marginTop: "10px",
      marginRight: "5px",
      marginLeft: "5px",
    },
    addCard: {
      display: addCard ? "block" : "none",
    },
  };

  const handleAdd = () => {
    setAddCard(true);
  };

  const handleSave = async (name, ingredientType) => {
    const newItem = await API.graphql({
      query: createIngredient,
      variables: { input: { name, type: ingredientType } },
    });
    setAddCard(false);
    return newItem;
  };

  const handleOpenItemBtn = (id, version) => {
    console.log("ID IS: ", id, "version: ", version);
    setUpdateCard(true);
    setCurrent(id);
    setCurrentV(version);
  };

  const handleUpdate = async (_version, id, name, ingredientType) => {
    const updateItem = await API.graphql({
      query: updateIngredient,
      variables: { input: { _version, id, name, type: ingredientType } },
    });
    return updateItem;
  };

  const handleDelete = async (_version, id) => {
    const deleteItem = await API.graphql({
      query: deleteIngredient,
      variables: { input: { _version, id } },
    });
    return deleteItem;
  };

  return (
    <div className="App">
      <Nav width="100%" />
      <div style={style.wrapper}>
        {ingredients &&
          ingredients.map((item, index) => {
            return (
              <div key={item.id} style={style.item}>
                <IngridientItem
                  name={item.name}
                  overrides={{
                    Ingredient: {
                      children: item.name,
                    },
                    Type: {
                      children: item.type,
                    },
                    "\uD83D\uDD12Icon": {
                      onClick: () => handleOpenItemBtn(item.id, item._version),
                    },
                  }}
                />
              </div>
            );
          })}
      </div>
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
      <button onClick={handleAdd}>Add new</button>
    </div>
  );
}

export default withAuthenticator(App);

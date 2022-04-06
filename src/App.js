import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
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
import {
  onCreateIngredient,
  onDeleteIngredient,
  onUpdateIngredient,
} from "./graphql/subscriptions";

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
      const items = data.data.listIngredients.items;
      const filtered = items.filter((item) => !item._deleted);
      setIngredients(filtered);
    };
    const subscription = API.graphql({
      query: onUpdateIngredient,
    }).subscribe({
      next: () => pullData(),
      error: (err) => console.log(err),
    });
    const subscriptionOnCreate = API.graphql({
      query: onCreateIngredient,
    }).subscribe({
      next: () => pullData(),
      error: (err) => console.log(err),
    });
    const subscriptionOnDelete = API.graphql({
      query: onDeleteIngredient,
    }).subscribe({
      next: () => pullData(),
      error: (err) => console.log(err),
    });
    pullData();
    return () => {
      subscription.unsubscribe();
      subscriptionOnCreate.unsubscribe();
      subscriptionOnDelete.unsubscribe();
    };
  }, []);

  const style = {
    pageWrapper: {
      filter: addCard || updateCard ? "blur(10px)" : "",
    },
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
    const result = await API.graphql({
      query: createIngredient,
      variables: { input: { name, type: ingredientType } },
    });
    // setIngredients((prev) => [...prev, result.data.createIngredient]);
    setAddCard(false);
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
    setUpdateCard(false);
    return updateItem;
  };

  const handleDelete = async (_version, id) => {
    console.log("delete version: ", _version);
    console.log("delete id: ", id);
    const deleteItem = await API.graphql({
      query: deleteIngredient,
      variables: { input: { _version, id } },
    });
    setUpdateCard(false);
  };

  return (
    <div className="App" style={{ marginBottom: "85px", marginTop: "100px" }}>
      <div className="page-wrapper" style={style.pageWrapper}>
        <Nav width="100%" position="fixed" style={{ top: "0", zIndex: "99" }} />
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
                        onClick: () =>
                          handleOpenItemBtn(item.id, item._version),
                      },
                    }}
                  />
                </div>
              );
            })}
        </div>

        <Button
          variation="primary"
          onClick={handleAdd}
          style={{
            position: "fixed",
            left: "50%",
            transform: "translate(-50%, 0)",
            bottom: "20px",
            boxShadow:
              "3px 4px 10px rgb(0 0 0 / 25%), -3px 4px 10px rgb(0 0 0 / 25%)",
          }}
        >
          Add new ingredient
        </Button>
      </div>
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
    </div>
  );
}

export default withAuthenticator(App);

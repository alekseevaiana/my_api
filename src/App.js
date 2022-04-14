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
import CreateIngredient from "./components/CreateIngredient";
import UpdateIngredient from "./components/UpdateIngredient";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [showAddCard, setShowAddCard] = useState(false);
  const [showUpdateCard, setShowUpdateCard] = useState(false);

  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listIngredients });
      const items = data.data.listIngredients.items;
      const filtered = items.filter((item) => !item._deleted);
      setIngredients(filtered);
    };
    const getSubscription = (queryType) => {
      const subscription = API.graphql({
        query: queryType,
      }).subscribe({
        next: () => pullData(),
        error: (err) => console.log(err),
      });
      return subscription;
    };
    const s1 = getSubscription(onUpdateIngredient);
    const s2 = getSubscription(onDeleteIngredient);
    const s3 = getSubscription(onCreateIngredient);

    pullData();
    return () => {
      s1.unsubscribe();
      s2.unsubscribe();
      s3.unsubscribe();
    };
  }, []);

  const style = {
    pageWrapper: {
      filter: showAddCard || showUpdateCard ? "blur(10px)" : "",
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
    showAddCard: {
      display: showAddCard ? "block" : "none",
    },
    showUpdateCard: {
      display: showUpdateCard ? "block" : "none",
    },
  };

  const handleIngredientCreate = async (data) => {
    const result = await API.graphql({
      query: createIngredient,
      variables: { input: { name: data.name, type: data.type } },
    });
    setShowAddCard(false);
  };

  const handleIngredientChange = async (data) => {
    const updateItem = await API.graphql({
      query: updateIngredient,
      variables: {
        input: {
          _version: data._version,
          id: data.id,
          name: data.name,
          type: data.type,
        },
      },
    });
    setShowUpdateCard(false);
  };

  const handleOpenItemBtn = (item) => {
    setCurrentIngredient(item);
    setShowUpdateCard(true);
  };

  const handleDelete = async (item) => {
    const deleteItem = await API.graphql({
      query: deleteIngredient,
      variables: { input: { _version: item._version, id: item.id } },
    });
    setShowUpdateCard(false);
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
                        onClick: () => handleOpenItemBtn(item),
                      },
                    }}
                  />
                </div>
              );
            })}
        </div>

        <Button
          variation="primary"
          onClick={() => setShowAddCard(true)}
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
      {showAddCard && (
        <CreateIngredient
          onChange={handleIngredientCreate}
          onClose={() => setShowAddCard(false)}
        />
      )}
      {showUpdateCard && (
        <UpdateIngredient
          currentIngredient={currentIngredient}
          onChange={handleIngredientChange}
          onDelete={handleDelete}
          onClose={() => setShowUpdateCard(false)}
        />
      )}
    </div>
  );
}

export default withAuthenticator(App);

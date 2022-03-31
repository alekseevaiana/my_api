import { withAuthenticator } from "@aws-amplify/ui-react";
import Nav from "./ui-components/Nav";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listIngredients } from "./graphql/queries";
import IngridientItem from "./ui-components/IngridientItem";

function App() {
  const [ingredients, setIngredients] = useState([]);
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
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default withAuthenticator(App);

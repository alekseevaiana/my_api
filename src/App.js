import { withAuthenticator } from "@aws-amplify/ui-react";
import Nav from "./ui-components/Nav";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listIngredients } from "./graphql/queries";

function App() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: listIngredients });
      console.log(data.data.listIngredients.items);
      setIngredients((prev) => [...prev, data.data.listIngredients.items]);
    };
    pullData();
  }, []);
  return (
    <div className="App">
      {ingredients && console.log("ingredients", ingredients)}
      <Nav width="100%" />
    </div>
  );
}

export default withAuthenticator(App);

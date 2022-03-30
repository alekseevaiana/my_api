import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Nav from "./ui-components/Nav";
import IngridientsCollection from "./ui-components/IngridientsCollection";
import IngridientItemCollection from "./ui-components/IngridientItemCollection";

function App() {
  return (
    <div className="App">
      <Nav width="100%" />
    </div>
  );
}

export default withAuthenticator(App);

import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return <div className="App">Hello</div>;
}

export default withAuthenticator(App);

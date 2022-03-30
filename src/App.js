import { withAuthenticator } from "@aws-amplify/ui-react";
import Nav from "./ui-components/Nav";
import { useEffect } from "react";

import config from "./aws-exports";

function App() {
  useEffect(() => {
    const pullData = async () => {
      let data = await fetch(config.aws_appsync_graphqlEndpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-KEY": config.aws_appsync_apiKey,
        },
        body: JSON.stringify({
          query: `query MyQuery {
            listIngredients {
              startedAt
              items {
                name
                type
              }
            }
          }`,
        }),
      });
      data = await data.json();
      console.log(data);
    };
    pullData();
  }, []);
  return (
    <div className="App">
      <Nav width="100%" />
    </div>
  );
}

export default withAuthenticator(App);

import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import Nav from "./ui-components/Nav";
import { useEffect, useState } from "react";
import { Button } from "@aws-amplify/ui-react";
import { Pagination, usePagination } from "@aws-amplify/ui-react";

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

import CreateIngredient from "./components/CreateIngredient";
import UpdateIngredient from "./components/UpdateIngredient";
import IngredientsList from "./components/IngredientsList";

const fetchItems = async (token) => {
  const data = await API.graphql({
    query: listIngredients,
    variables: {
      limit: 21,
      nextToken: token,
    },
  });
  const items = data.data.listIngredients.items;
  const nextToken = data.data.listIngredients.nextToken;
  const filtered = items.filter((item) => !item._deleted);
  return { nextToken, filtered };
};

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [showAddCard, setShowAddCard] = useState(false);
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [tokens, setTokens] = useState({});

  useEffect(() => {
    const pullData = async () => {
      const { nextToken, filtered } = await fetchItems(null);
      const { nextToken: nextNextToken } = await fetchItems(nextToken);

      setTokens({
        1: { nextToken, token: null },
        2: { nextToken: nextNextToken, prevToken: null, token: nextToken },
      });
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

    showAddCard: {
      display: showAddCard ? "block" : "none",
    },
    showUpdateCard: {
      display: showUpdateCard ? "block" : "none",
    },
  };

  const handlePaginationChange = async (newPageIndex, prevPageIndex) => {
    const { nextToken, filtered } = await fetchItems(
      tokens[newPageIndex].token
    );
    setIngredients(filtered);
    setCurrentPageIndex(newPageIndex);

    const nextPage = newPageIndex + 1;
    if (!tokens[nextPage]) {
      const { nextToken: nextNextToken } = await fetchItems(nextToken);
      const nexItem = {
        ...tokens,
        [currentPageIndex + 2]: {
          prevToken: tokens[newPageIndex].token,
          nextToken: nextNextToken,
          token: nextToken,
        },
      };
      setTokens(nexItem);
    }
  };

  const handleNextPage = async () => {
    const desiredPageIndex = currentPageIndex + 1;
    if (tokens[desiredPageIndex]) {
      const desiredToken = tokens[desiredPageIndex].token;
      const { nextToken: nextDesiredToken, filtered } = await fetchItems(
        desiredToken
      );

      setIngredients(filtered);
      const nextPage = desiredPageIndex + 1;
      if (!tokens[nextPage]) {
        const { nextToken: nextNextToken } = await fetchItems(nextDesiredToken);
        const nexItem = {
          ...tokens,
          [currentPageIndex + 2]: {
            prevToken: desiredToken,
            nextToken: nextNextToken,
            token: nextDesiredToken,
          },
        };
        setTokens(nexItem);
      }
    }
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handlePreviousPage = async () => {
    const { filtered } = await fetchItems(tokens[currentPageIndex - 1].token);
    setIngredients(filtered);
    setCurrentPageIndex(currentPageIndex - 1);
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
      <Pagination
        onChange={handlePaginationChange}
        currentPage={currentPageIndex}
        totalPages={currentPageIndex + 1}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />

      <div className="page-wrapper" style={style.pageWrapper}>
        <Nav width="100%" position="fixed" style={{ top: "0", zIndex: "99" }} />
        <IngredientsList
          onIconClick={handleOpenItemBtn}
          ingredients={ingredients}
        />
        <Button
          variation="primary"
          onClick={() => setShowAddCard(true)}
          style={{
            position: "fixed",
            left: "50%",
            transform: "translate(-50%, 0)",
            bottom: "21px",
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

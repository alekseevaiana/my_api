import IngridientItem from "../ui-components/IngridientItem";

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

export default function IngredientsList({ onIconClick, ingredients }) {
  return (
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

                    style: {
                      textOverflow: "ellipsis",
                      maxWidth: "100px",
                      overflow: "hidden",
                    },
                    display: "block",
                    whiteSpace: "nowrap",
                  },
                  Type: {
                    children: item.type,
                  },
                  "\uD83D\uDD12Icon": {
                    onClick: () => onIconClick(item),
                    style: { cursor: "pointer" },
                  },
                }}
              />
            </div>
          );
        })}
    </div>
  );
}

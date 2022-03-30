/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Ingredient } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import IngridientItem from "./IngridientItem";
import { Collection } from "@aws-amplify/ui-react";
export default function IngredientsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Ingredient,
        }).items;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "IngredientsCollection")}
    >
      {(item, index) => (
        <IngridientItem
          ingredient={item}
          height="auto"
          width="auto"
          margin="0 0 0 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></IngridientItem>
      )}
    </Collection>
  );
}

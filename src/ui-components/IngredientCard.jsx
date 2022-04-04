/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, SelectField, Text, View } from "@aws-amplify/ui-react";
export default function IngredientCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="361px"
      height="280px"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "IngredientCard")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="201px"
        left="112px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Delete"
        {...getOverrideProps(overrides, "Buttonebg")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="202px"
        left="31px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(4,125,149,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Edit"
        {...getOverrideProps(overrides, "Buttoneuj")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="36px"
        left="113px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ingredient"
        {...getOverrideProps(overrides, "Ingredient")}
      ></Text>
      <SelectField
        display="flex"
        gap="12px"
        position="absolute"
        top="83px"
        left="31px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Type"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}

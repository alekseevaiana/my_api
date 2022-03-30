/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import Close from "./Close";
export default function IngridientEditCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="361px"
      height="484px"
      position="relative"
      border="1px SOLID rgba(229,229,229,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "IngridientEditCard")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="375px"
        left="111px"
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
        {...getOverrideProps(overrides, "Buttonvwi")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="376px"
        left="30px"
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
        children="Save"
        {...getOverrideProps(overrides, "Buttonxim")}
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
        top="92.72px"
        left="158px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit"
        {...getOverrideProps(overrides, "Edit")}
      ></Text>
      <SelectField
        display="flex"
        gap="12px"
        position="absolute"
        top="257px"
        left="30px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Type"
        placeholder="Fruits"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <TextField
        display="flex"
        gap="12px"
        position="absolute"
        top="144px"
        left="30px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Name"
        placeholder="Apple"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Close
        position="absolute"
        top="2.07%"
        bottom="89.26%"
        left="85.6%"
        right="2.77%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Close")}
      ></Close>
    </View>
  );
}

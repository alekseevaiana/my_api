/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, SelectField, Text, View } from "@aws-amplify/ui-react";
import Close from "./Close";
export default function IngridientCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="361px"
      height="358px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(229,229,229,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "IngridientCard")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="261.72px"
        left="110px"
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
        {...getOverrideProps(overrides, "Buttonfiw")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="262.72px"
        left="29px"
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
        {...getOverrideProps(overrides, "Buttonhal")}
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
        left="145px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Apple"
        {...getOverrideProps(overrides, "Apple")}
      ></Text>
      <SelectField
        display="flex"
        gap="12px"
        position="absolute"
        top="143.72px"
        left="29px"
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
      <Close
        position="absolute"
        top="3.63%"
        bottom="84.64%"
        left="85.32%"
        right="3.05%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Close")}
      ></Close>
    </View>
  );
}

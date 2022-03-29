/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, SelectField, Text, View } from "@aws-amplify/ui-react";
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
        {...getOverrideProps(overrides, "Buttonlbq")}
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
        {...getOverrideProps(overrides, "Buttongke")}
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
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="4.19%"
        bottom="84.08%"
        left="85.32%"
        right="3.05%"
        {...getOverrideProps(overrides, "Close")}
      >
        <Icon
          width="42px"
          height="42px"
          viewBox={{ minX: 0, minY: 0, width: 42, height: 42 }}
          paths={[
            {
              d: "M42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21Z",
              fill: "rgba(4,125,149,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Ellipse 1")}
        ></Icon>
        <Icon
          position="absolute"
          top="20%"
          bottom="20%"
          left="20%"
          right="20%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
          ]}
          type="close"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        ></Icon>
      </View>
    </View>
  );
}

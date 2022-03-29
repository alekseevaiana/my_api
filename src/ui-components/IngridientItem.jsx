/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function IngridientItem(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="364px"
      height="96px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(4,125,149,1)"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "IngridientItem")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(57,44,122,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="40px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Apple"
        {...getOverrideProps(overrides, "Apple")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(104,112,120,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="40px"
        left="167.5px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Fruits"
        {...getOverrideProps(overrides, "Fruits")}
      ></Text>
      <Icon
        width="30px"
        height="30px"
        position="absolute"
        top="63px"
        right="17px"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(-90deg)"
        padding="0px 0px 0px 0px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
            style: { transform: "translate(25%, 35.79%)" },
          },
        ]}
        type="chevron_down"
        fontSize="30px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
      ></Icon>
    </View>
  );
}

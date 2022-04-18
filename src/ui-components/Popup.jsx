/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Close from "./Close";
import { View } from "@aws-amplify/ui-react";
export default function Popup(props) {
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
      {...getOverrideProps(overrides, "Popup")}
    >
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

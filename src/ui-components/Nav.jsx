/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <View
      width="487px"
      height="94px"
      position="relative"
      boxShadow="2px 0px 14px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "Nav")}
    >
      <Button
        display="flex"
        gap="10px"
        position="absolute"
        top="28.72%"
        bottom="28.72%"
        left="74.13%"
        right="5.34%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Sign Out"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Close(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="42px"
      height="42px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
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
      <View
        position="absolute"
        top="19.05%"
        bottom="20.95%"
        left="19.05%"
        right="20.95%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
      >
        <Icon
          width="14.699951171875px"
          height="14.7001953125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.699951171875,
            height: 14.7001953125,
          }}
          paths={[
            {
              d: "M14.7 1.4805L13.2195 0L7.34999 5.8695L1.4805 0L0 1.4805L5.86949 7.34999L0 13.2195L1.4805 14.7L7.34999 8.83049L13.2195 14.7L14.7 13.2195L8.83049 7.34999L14.7 1.4805Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="20.83%"
          bottom="20.83%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Close(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="42px"
      height="42px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 42, height: 42 }}
      paths={[
        {
          d: "M42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21Z",
          fill: "rgba(4,125,149,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(19.05%, 19.05%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Close")}
    ></Icon>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Ingredient } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type IngridientItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    ingredient?: Ingredient;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function IngridientItem(props: IngridientItemProps): React.ReactElement;

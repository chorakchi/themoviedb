import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { TextStyled } from "./styled";

type Props = {
  children: any;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
};

export const Typography = (props: Props) => {
  const { children } = props;
  return <TextStyled variant={props.variant}>{children}</TextStyled>;
};

import styled from "styled-components/native";

import * as React from "react";

export const TextStyled = styled.Text`
  font-size: ${(props) =>
    props.variant == "h1"
      ? "96px"
      : (props) =>
          props.variant == "h2"
            ? "60px"
            : (props) =>
                props.variant == "h3"
                  ? "48px"
                  : (props) =>
                      props.variant == "h4"
                        ? "34px"
                        : (props) =>
                            props.variant == "h5"
                              ? "24px"
                              : (props) =>
                                  props.variant == "h6"
                                    ? "20px"
                                    : (props) =>
                                        props.variant == "body1"
                                          ? "16px"
                                          : (props) =>
                                              props.variant == "body2"
                                                ? "14px"
                                                : (props) =>
                                                    props.variant == "subtitle1"
                                                      ? "16px"
                                                      : (props) =>
                                                          props.variant ==
                                                          "subtitle2"
                                                            ? "14px"
                                                            : (props) =>
                                                                props.variant ==
                                                                "caption"
                                                                  ? "12px"
                                                                  : (props) =>
                                                                      props.variant ==
                                                                      "button"
                                                                        ? "16px"
                                                                        : (
                                                                            props
                                                                          ) =>
                                                                            props.variant ==
                                                                            "inherit"
                                                                              ? "inherit"
                                                                              : "16px"};
`;

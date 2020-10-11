import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "./moviesList.actions";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Typography } from "./../../shared";
import {
  RocoredStyled,
  TitleStyoed,
  TitleWrapperStyled,
  NameWrapperStyled,
  VoteAverageStyled,
  VoteAverageWrapperStyled,
  FavoritesWrapperStyled,
  RecordsContainerStyled,
  ScrollViewStyled,
  SafeAreaViewStyled,
} from "./styled";

import { get } from "./../../../services/request";

export const MoviesList = (props) => {
  const dispatch: Function = useDispatch();
  const list = useSelector((state) => state.moviesList.moviesList);

  useEffect(() => {
    dispatch(getMoviesList(props.genreId));
  }, []);

  return (
    <SafeAreaViewStyled>
      <TitleWrapperStyled>
        <Typography variant="h4">Movies</Typography>
      </TitleWrapperStyled>
      <ScrollViewStyled>
        <RecordsContainerStyled>
          {list.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.onSelectGenre(item);
                }}
                key={item.id}
              >
                <RocoredStyled key={item.id}>
                  <NameWrapperStyled>
                    <Typography>{item.title}</Typography>
                  </NameWrapperStyled>
                </RocoredStyled>
              </TouchableOpacity>
            );
          })}
        </RecordsContainerStyled>
      </ScrollViewStyled>
    </SafeAreaViewStyled>
  );
};

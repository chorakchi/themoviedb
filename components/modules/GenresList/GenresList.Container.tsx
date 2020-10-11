import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresList } from "./genresList.actions";
import { Alert, View, ScrollView, TouchableOpacity } from "react-native";
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

export const GenresList = (props) => {
  const dispatch: Function = useDispatch();
  const genresData = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenresList());
  }, []);

  return (
    <SafeAreaViewStyled>
      <TitleWrapperStyled>
        <Typography variant="h4">
          Find movies, TV Shows {"\n"}and more ...
        </Typography>
      </TitleWrapperStyled>
      <ScrollViewStyled>
        <RecordsContainerStyled>
          {genresData &&
            genresData.genresList.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.onSelectGenre(item);
                  }}
                  key={item.id}
                >
                  <RocoredStyled>
                    <NameWrapperStyled>
                      <Typography>{item.name}</Typography>
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

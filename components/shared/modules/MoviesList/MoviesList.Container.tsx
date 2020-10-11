import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList, resetMoviesList } from "./moviesList.actions";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
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
  const moviesList = useSelector((state) => state.moviesList);

  useEffect(() => {
    dispatch(resetMoviesList());
    dispatch(getMoviesList({ genreId: props.genreId, page: 1 }));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        props.onSelectGenre(item);
      }}
      key={"TouchableOpacity-" + item.id.toString()}
    >
      <RocoredStyled>
        <NameWrapperStyled>
          <Typography>{item.title.toString()}</Typography>
        </NameWrapperStyled>
      </RocoredStyled>
    </TouchableOpacity>
  );

  const fetchMore = () => {
    dispatch(
      getMoviesList({ genreId: props.genreId, page: moviesList.lastPage + 1 })
    );
  };

  return (
    <SafeAreaViewStyled>
      <TitleWrapperStyled>
        <Typography variant="h4">Movies</Typography>
      </TitleWrapperStyled>
      <FlatList
        data={moviesList.moviesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaViewStyled>
  );
};

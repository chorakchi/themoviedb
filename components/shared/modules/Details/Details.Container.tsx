import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "./details.actions";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
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
  ImageStyled,
  ImageContainerStyled,
} from "./styled";

import { get } from "./../../../services/request";

export const Details = (props) => {
  const dispatch: Function = useDispatch();
  const detailsData = useSelector((state) => state.details.details);

  useEffect(() => {
    dispatch(getDetails(props.movieId));
  }, []);

  console.log(detailsData);

  return (
    <SafeAreaViewStyled>
      {detailsData && (
        <React.Fragment>
          <TitleWrapperStyled>
            <Typography variant="h4">{detailsData.title}</Typography>
          </TitleWrapperStyled>
          <ScrollViewStyled>
            <ImageContainerStyled>
              <ImageStyled
                source={{
                  uri: Constants.manifest.extra.REACT_APP_IMAGE_API_URL.replace(
                    /IMAGE/g,
                    detailsData.poster_path
                  ),
                }}
              />
            </ImageContainerStyled>
            <TitleWrapperStyled>
              <Typography variant="body">{detailsData.overview}</Typography>
              <Typography>
                Genres: {detailsData.genres.map((item) => item.name + ", ")}
              </Typography>
            </TitleWrapperStyled>
            {detailsData.production_companies.map((item) => (
              <ImageContainerStyled>
                <ImageStyled
                  key={item.id}
                  source={{
                    uri: Constants.manifest.extra.REACT_APP_IMAGE_API_URL.replace(
                      /IMAGE/g,
                      item.logo_path
                    ),
                  }}
                />
              </ImageContainerStyled>
            ))}
          </ScrollViewStyled>
        </React.Fragment>
      )}
    </SafeAreaViewStyled>
  );
};

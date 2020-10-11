import React from "react";
import { View, StyleSheet } from "react-native";
import { GenresList } from "../components/modules/GenresList";

export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <GenresList
        onSelectGenre={(data) => {
          navigation.push("MoviesList", data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
});

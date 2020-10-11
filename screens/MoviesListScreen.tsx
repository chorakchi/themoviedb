import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { MoviesList } from "../components/modules/MoviesList";

export default function TabTwoScreen({ route, navigation }) {
  const { id } = route.params;
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Root");
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <MoviesList
        genreId={id}
        onSelectGenre={(data) => {
          navigation.navigate("Details", data);
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
    height: 20,
    width: "100%",
  },
});
